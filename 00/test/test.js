$(function() {

  //location api
  var x = document.getElementById("demo");

  $( "#click" ).click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }  });

  function showPosition(position) {
    //native land api
    var location = 'https://native-land.ca/api/index.php?maps=languages&position=' + position.coords.latitude + ',' + position.coords.longitude;

    $.get(location, function(data) {
      console.log(data);

      var locationTribe = data[0].properties.Name;
      console.log(locationTribe);

      $('#location-demo').html('You are on the land of the ' + locationTribe + ' people');
    });
  }

  //error message
  function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        x.innerHTML = "You denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        x.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        x.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        x.innerHTML = "An unknown error occurred."
        break;
    }
  }

//click gallery
  $(".pic").click(function(){
    $(this).toggleClass('clicked');
    $('#howmuch-demo').html($('.clicked').length + "/5");
  });

});
