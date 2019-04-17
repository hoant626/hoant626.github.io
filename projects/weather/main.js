$(function() {
  console.log('hey');

  //carbon monoxide
  var carbonUrl = 'http://api.openweathermap.org/pollution/v1/co/0.0,10.0/current.json?appid=54f1d24ad1bd831b44d255287a07a053'

  //sulfur
  var sulfurUrl = 'http://api.openweathermap.org/pollution/v1/so2/0.0,10.0/current.json?appid=54f1d24ad1bd831b44d255287a07a053'

  //nitrogen
  var nitrogenUrl = 'http://api.openweathermap.org/pollution/v1/no2/0.0,10.0/2016-12-31T12:55:57Z.json?appid=54f1d24ad1bd831b44d255287a07a053'

  $.get(carbonUrl, function(data) {
    window.data = data;
    //console.log(data);
    var carbonValue = data.data[0].value;
    console.log('The carbon volume mixing ratio  is ' + carbonValue);
    var carbon = carbonValue*(10e8);
    $('.triangle').css("borderBottomWidth", carbon + 'px');
    $(".carbon").text(carbonValue);

  });

  $.get(sulfurUrl, function(data) {
    window.data = data;
    //console.log(data);
    var sulfurValue = data.data[0].value;
    console.log('The sulfur volume mixing ratio  is ' + sulfurValue);
    var sulfur = sulfurValue*(10e9);
    $('.triangle').css("borderLeftWidth", sulfur + 'px');
    $(".sulfur").text(sulfurValue);

  });

  $.get(nitrogenUrl, function(data) {
    window.data = data;
    //console.log(data);
    var nitrogenValue = data.data.no2.value;
    console.log('The nitrogen volume mixing ratio  is ' + nitrogenValue);
    var nitrogen = nitrogenValue*(10e-14);
    $('.triangle').css("borderRightWidth", nitrogen + 'px');
    $(".nitrogen").text(nitrogenValue);
  });


});
