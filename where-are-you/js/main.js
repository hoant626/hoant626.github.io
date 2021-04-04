$(document).ready(function() {

// sidebar
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("nav").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function() {
    toggleSidebar();
  });

  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

  //location api
  var x = document.getElementById("demo");

  $( "#click" ).click(function() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
      $(".info").addClass("loading");
      $('.info').html('Checking your location...');

    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }  });

  function showPosition(position) {
    //native land api
    var location = 'https://native-land.ca/api/index.php?maps=languages&position=' + position.coords.latitude + ',' + position.coords.longitude;

    console.log(position)
    $.get(location, function(data) {

      console.log(data);

      var locationTribe = data[0].properties.Name;
      console.log(locationTribe);

      $('#location-output1').html('You are on the land of the ');
      $('#location-output2').html(locationTribe);

      $(".info, #click").addClass("hide");
      $(".caption, #redirect").removeClass("hide");


      $("a").attr("href", "https://google.com/search?q=" + locationTribe + "+art&tbm=isch");

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

});
