$(document).ready(function() {

  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("nav").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button, .sidebar-item").on("click tap", function() {
    toggleSidebar();
  });


  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });

});
