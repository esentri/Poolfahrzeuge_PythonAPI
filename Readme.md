arpool Registry Service Usage

All responses will have the form

{ "data": "Mixed type holding the content of the response", "message": "Description of what happened" }

List all cars

Definition

GET /cars

Response

200 OK on success

[ { "license_plate": "KA-ES-120", "car_type": "Audi A5", } ]

Registering a new car

Definition

POST /car

Arguments

"license_plate":string a globally unique identifier for this car
"car_type":string the type of the car as understood by the client
"fuel": string the type of fuel the car uses
"number_of_seats": integer the number of seats the car has

If a car with the given identifier already exists, the existing device will be overwritten.

Response

201 Created on success

{ "license_plate": "KA-ES-120", "car_type": "Audi A5", "fuel": "Diesel", "number_of_seats": 5 }

Lookup car details

GET /car/

Response

404 Not Found if the device does not exist
200 OK on success

{ "license_plate": "KA-ES-120", "car_type": "Audi A5", "fuel": "Diesel", "number_of_seats": "5" }

Delete a car

Definition

DELETE /car/

Response

404 Not Found if the car does not exist
204 No Content on success
