$(function() {

  var animal1 = 'https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers[]=4262-84830876&sensor_type=gps'

  var animal2 = 'https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers[]=1163-1163&sensor_type=gps'

  var animal3 = 'https://www.movebank.org/movebank/service/public/json?study_id=2911040&ndividual_local_identifiers[]=2131-2131&sensor_type=gps'

  $.get(animal1, function(data) {
    window.data = data;
    console.log(data);


  });
});
