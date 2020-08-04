"""
File for importing data into DB
"""
from flask import Flask
from os import environ
from dotenv import load_dotenv
from server.models.listing import Db, Listing
from notebooks import utils
import numpy as np
import pandas as pd
import requests
import joblib
from psycopg2.extensions import register_adapter, AsIs

def adapt_numpy_int64(numpy_int64):
    """ Adapting numpy.int64 type to SQL-conform int type using psycopg extension, see [1]_ for more info.
    References
    ----------
    .. [1] http://initd.org/psycopg/docs/advanced.html#adapting-new-python-types-to-sql-syntax
    """
    return AsIs(numpy_int64)

register_adapter(np.int64, adapt_numpy_int64)

model = joblib.load('./server/rf_full.pkl')
columns = ['SOLDPRICE', 'DOM', 'BEDS', 'BATHS', 'SQFT', 'AGE', 'GARAGE', 'PROPTYPE_CAT', 'STYLE_CAT', 'ZIP_CAT', 'SOLDDATE_CAT']

load_dotenv('.env')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
Db.init_app(app)
google_api_key = environ.get('GOOGLE_API_KEY')

# Uncomment to add data to the database
#@app.before_first_request
def initialize():
    print('Begin Pulling Data')
    data = utils.get_data('./data')
    print('Data Pulled Successfully')
    data = data[data['STATUS'] == 'SLD']
    data = data[data['PROPTYPE'] != 'CC']
    data = data.replace({np.nan: None})
    print('Pulling Flip Records')
    flipData = pd.read_csv('./notebooks/outputs/merged_test_and_control_data.csv')
    flips = flipData[flipData['FLIPPABLE'] == True]
    nonflips = flipData[flipData['FLIPPABLE'] == False]
    flips = data[data['MLSNUM'].isin(flips['MLSNUM'])]
    nonflips = data[data['MLSNUM'].isin(nonflips['MLSNUM'])]

    test_db = pd.concat([flips, nonflips[0:9998 - len(flips)]])
    test_db = test_db.to_dict('records')
    print('Creating Listings')
    for listing in test_db:
        category_data = flipData[flipData['MLSNUM'] == listing['MLSNUM']].iloc[0]
        listing['PROPTYPE_CAT'] = category_data['PROPTYPE_CAT']
        listing['STYLE_CAT'] = category_data['STYLE_CAT']
        listing['ZIP_CAT'] = category_data['ZIP_CAT']
        listing['SOLDDATE_CAT'] = category_data['SOLDDATE_CAT']
        x = []
        for col in columns:
            x.append(listing[col])
        res = model.predict_proba([x])[0]
        listing['FLIP_SCORE'] = res[1] * 100
        new_listing = Listing(**listing)
        Db.session.add(new_listing)
    print('Save Listings')
    Db.session.commit()
    print('Done Saved All listings')

# Uncomment to add lat lng to database
#@app.before_first_request
def getLatLng():
    print('Get Listings')
    listings = Listing.query.filter_by(lat=None).all()
    for listing in listings:
        if listing.ADDRESS:
            if listing.CITY:
                url = 'https://maps.googleapis.com/maps/api/geocode/json?address={0} {1}&key={2}'.format(listing.ADDRESS, listing.CITY, google_api_key)
                home = requests.get(url)
                home = home.json()
                if home['results']:
                    if home['results'][0]:
                        home = home['results'][0]['geometry']['location']
                        lat = home['lat']
                        lng = home['lng']
                        listing.lat = lat
                        listing.lng = lng
                        Db.session.commit()
    print('Done Updated listings')
