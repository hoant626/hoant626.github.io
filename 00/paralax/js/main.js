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

//animation
  $(window).scroll( function(){

      /* Check the location of each desired element */
      $('.hide').each( function(i){

          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it in */
          if( bottom_of_window > bottom_of_object ){

              $(this).animate({'opacity':'1'},500);

          }

      });

  });
});
