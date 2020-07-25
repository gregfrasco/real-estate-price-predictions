"""
File for importing data into DB
"""
from flask import Flask
from os import environ
from dotenv import load_dotenv
from server.models.listing import Db, Listing
from notebooks import utils
import numpy as np

load_dotenv('.env')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
Db.init_app(app)

@app.before_first_request
def initialize():
    print('Begin Pulling Data')
    data = utils.get_data('./data')
    print('Data Pulled Successfully')
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
