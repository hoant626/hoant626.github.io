$(function() {
  // Your interactions go here
  $( ".seagull" ).click(function() {
  $( ".seagull" ).animate({
    left: "+=1000",
    top: "-=500"
  }, 5000, function() {
    // Animation complete.
  });
});

});
