var animal1;
function setup() {
  // put setup code here
  createCanvas(1000,1000);

  loadJSON('https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers[]=4262-84830876&sensor_type=gps', gotData);

  loadJSON('https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers[]=1163-1163&sensor_type=gps');

  loadJSON('https://www.movebank.org/movebank/service/public/json?study_id=2911040&ndividual_local_identifiers[]=2131-2131&sensor_type=gps')
}

function gotData(data){
  //println(data);
  animal1 = data;
  if (animal1) {
    ellipse(50, 100, abs(animal1.locations.location_long), abs(animal1.locations.location_long));
    ellipse(300, 100, animal1.locations.location_lat, animal1.locations.location_lat);
  }

}

function draw() {
  // put drawing code here
  background(0);
}
