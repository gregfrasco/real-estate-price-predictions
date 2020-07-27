"""
File for importing data into DB
"""
from flask import Flask
from os import environ
from dotenv import load_dotenv
from server.models.listing import Db, Listing
from notebooks import utils
import numpy as np
import requests

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
    data = data.to_dict('records')
    data = data[0:10000] # Heroku Max DB Size
    print('Creating Listings')
    for listing in data:
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
