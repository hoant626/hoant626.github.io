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

//overlay
  $(".tag").click(function() {
    $(".overlay:visible").fadeOut(300);
    $("#" + $(this).attr("data-showdiv")).fadeIn(300);
  })

  $('.exit').click(function() {
     $(".overlay:visible").fadeOut(300);
  });

});
