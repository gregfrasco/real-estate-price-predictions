from flask import Flask
from os import environ
from dotenv import load_dotenv
from models.listing import Db, Listing

load_dotenv('.env')

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
Db.init_app(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/listing/<str:city>')
def getListingsByCity(city):
    return []

@app.route('/api/predict/<num:mls>')
def predictFlip(mls):
    return 75
