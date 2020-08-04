from flask_sqlalchemy import SQLAlchemy

# Create DB instance
Db = SQLAlchemy()

class Listing(Db.Model):
    # Fields
    __tablename__ = 'listings'
    MLSNUM = Db.Column(Db.Integer, primary_key=True)
    STATUS = Db.Column(Db.String(64), nullable=False)
    LISTPRICE = Db.Column(Db.Integer, nullable=False)
    SOLDPRICE = Db.Column(Db.Integer, nullable=True)
    LISTDATE = Db.Column(Db.DATE, nullable=False)
    SOLDDATE = Db.Column(Db.DATE, nullable=True)
    EXPIREDDATE = Db.Column(Db.DATE, nullable=True)
    DOM = Db.Column(Db.Integer, nullable=False)
    DTO = Db.Column(Db.Integer, nullable=True)
    ADDRESS = Db.Column(Db.String, nullable=False)
    CITY = Db.Column(Db.String, nullable=False)
    STATE = Db.Column(Db.String, nullable=False)
    ZIP = Db.Column(Db.String, nullable=False)
    AREA = Db.Column(Db.String, nullable=True)
    BEDS = Db.Column(Db.Integer, nullable=False)
    BATHS = Db.Column(Db.Float, nullable=False)
    SQFT = Db.Column(Db.Float, nullable=False)
    AGE = Db.Column(Db.Integer, nullable=True)
    LOTSIZE = Db.Column(Db.Float, nullable=True)
    AGENTNAME = Db.Column(Db.String, nullable=True)
    OFFICENAME = Db.Column(Db.String, nullable=True)
    OFFICEPHONE = Db.Column(Db.String, nullable=True)
    SHOWINGINSTRUCTIONS = Db.Column(Db.String, nullable=True)
    REMARKS = Db.Column(Db.String, nullable=True)
    STYLE = Db.Column(Db.String, nullable=True)
    LEVEL = Db.Column(Db.String, nullable=True)
    GARAGE = Db.Column(Db.Integer, nullable=True)
    HEATING = Db.Column(Db.String, nullable=True)
    COOLING = Db.Column(Db.String, nullable=True)
    ELEMENTARYSCHOOL = Db.Column(Db.String, nullable=True)
    JUNIORHIGHSCHOOL = Db.Column(Db.String, nullable=True)
    HIGHSCHOOL = Db.Column(Db.String, nullable=True)
    OTHERFEATURES = Db.Column(Db.String, nullable=True)
    PROPTYPE = Db.Column(Db.String, nullable=False)
    STREETNAME = Db.Column(Db.String, nullable=False)
    HOUSENUM1 = Db.Column(Db.String, nullable=True)
    HOUSENUM2 = Db.Column(Db.String, nullable=True)
    PHOTOURL = Db.Column(Db.String, nullable=True)
    zoMLSNUM = Db.Column(Db.Integer, nullable=True)
    lat = Db.Column(Db.Float, nullable=True)
    lng = Db.Column(Db.Float, nullable=True)
    PROPTYPE_CAT = Db.Column(Db.Integer, nullable=True)
    STYLE_CAT = Db.Column(Db.Integer, nullable=True)
    ZIP_CAT = Db.Column(Db.Integer, nullable=True)
    SOLDDATE_CAT = Db.Column(Db.Integer, nullable=True)
    FLIP_SCORE = Db.Column(Db.Float, nullable=True)

    def to_dict(self):
        listing = self.__dict__
        if '_sa_instance_state' in listing:
            del listing['_sa_instance_state']
        return listing
