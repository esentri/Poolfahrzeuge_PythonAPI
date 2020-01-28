from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow, fields
from flask_cors import CORS

# Init app
app = Flask(__name__)

#enable CORS 
cors= CORS(app)
# connect to already existing and running Database
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:@0.0.0.0:5432/esentricar'

# not important but otherwise we get a warning every time
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#Init db
db = SQLAlchemy(app)
#Init ma
ma = Marshmallow(app)

# Pool Car Class/Model
class Pool_Car(db.Model):

    #define table, in our case already existing
    __tablename__ = 'cars'
    car_id =         db.Column(db.Integer, primary_key=True)
    license_plate =  db.Column(db.String(30), unique=True)
    car_type =       db.Column(db.String(20))
    fuel =           db.Column(db.String(20))
    number_of_seats =db.Column(db.Integer)


    # set class attributes
    def __init__(self, license_plate, car_type, fuel, number_of_seats):
        self.license_plate = license_plate
        self.car_type   = car_type
        self.fuel       = fuel
        self.number_of_seats = number_of_seats

class Pool_CarSchema(ma.Schema):
    class Meta:
        fields = ('car_id','license_plate','car_type','fuel','number_of_seats')

# Init schema
pool_car_schema = Pool_CarSchema()
pool_cars_schema = Pool_CarSchema(many=True)


# Create a Pool_Car
@app.route('/car', methods=['POST'])
def add_pool_car():
  # Get request data as json
  car_entity = request.get_json()
  license_plate= car_entity.get('license_plate')
  car_type = car_entity.get('car_type')
  fuel = car_entity.get('fuel')
  number_of_seats = car_entity.get('number_of_seats')

  new_pool_car = Pool_Car(license_plate, car_type, fuel, number_of_seats)

  db.session.add(new_pool_car)
  db.session.commit()
  
  return pool_car_schema.jsonify(new_pool_car)

# Get car_id,license_plate,car_type of all products of the table
@app.route('/car', methods=['GET'])
def get_pool_cars():
  all_pool_cars = Pool_Car.query.all()
  result = pool_cars_schema.dump(all_pool_cars)
  car_list= []
  for item in result:
          car_details = { "car_id":None, "license_plate":None, "car_type":None}
          car_details['car_id'] = item['car_id']
          car_details['license_plate'] = item['license_plate']
          car_details['car_type'] = item['car_type']
          car_list.append(car_details)
  return jsonify(car_list)

# Get Single Products
@app.route('/car/<car_id>', methods=['GET'])
def get_pool_car(car_id):
  pool_car = Pool_Car.query.get(car_id)
  return pool_car_schema.jsonify(pool_car)

# Delete Product
@app.route('/car/<car_id>', methods=['DELETE'])
def delete_pool_car(car_id):
  pool_car = Pool_Car.query.get(car_id)
  db.session.delete(pool_car)
  db.session.commit()

  return pool_car_schema.jsonify(pool_car)


if __name__ == '__main__':
  app.run(debug=True) #port='5002'