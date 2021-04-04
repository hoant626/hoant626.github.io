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

//clickable table
  $(".clickable-row").click(function() {
     window.location = $(this).data("href");
  });

});
