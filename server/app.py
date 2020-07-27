from flask import Flask, jsonify
from flask_cors import CORS
from os import environ
from dotenv import load_dotenv
from models.listing import Db, Listing
import joblib
model = joblib.load('./model.pkl')
columns = ['SOLDPRICE', 'DOM', 'BEDS', 'BATHS', 'SQFT', 'AGE', 'GARAGE']
load_dotenv('.env')

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
CORS(app, resources={r"/api/*": {"origins": "*"}})
Db.init_app(app)


@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/listings/<city>')
def getListingsByCity(city):
    city_listings = Listing.query.filter_by(CITY=city).all()
    return jsonify([listing.to_dict() for listing in city_listings])

@app.route('/api/predict/<int:mls>')
def predictFlip(mls):
    listing = Listing.query.filter_by(MLSNUM=mls).one().to_dict()
    x = []
    for col in columns:
        x.append(listing[col])
    res = model.predict_proba([x])[0]
    return jsonify({'score': res[1] * 100})
