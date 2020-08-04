# Flipper Server

API Server for the flipper application

## Prerequisites

- Python 3
- PostgresSQL Database

## Getting Started

- Create a postgres db with the following [schema](https://github.com/gregfrasco/real-estate-price-predictions/blob/master/server/schema.sql)
- Create a .env file with the following variables
```text
DATABASE_URL=postgres://add your connection url here
GOOGLE_API_KEY=Need if your are geo-coding listing in the database
```

## Seeding the Database

- Run [init_db.py](https://github.com/gregfrasco/real-estate-price-predictions/blob/master/init_db.py) flask server and uncommenting first the step to add in the test data
- Once complete and if needed to geocode the listing, uncomment the second and rerun the server 

## API Docs

`GET /api/allCities`

Returns a list of available city names in the database

Response: String []

Example: ['Boston', 'Cambridge', ..., 'Waltham']

`GET /api/listings/:city`

Returns a list of listings within that city in the database

Response: [Listing](https://github.com/gregfrasco/real-estate-price-predictions/blob/master/server/models/listing.py) []

`GET /api/predict/:MLSNUM`

Given a mls number in the database will run that listing threw our model and return a probability score

Example: { score: 97 }
