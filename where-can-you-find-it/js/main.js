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

//Hover

  $( ".item1" ).mouseover(function() {
    $( ".text1" ).addClass( "showcap" );
  });
  $( ".item1" ).mouseout(function() {
    $( ".text1" ).removeClass( "showcap" );
  });

  $( ".item2" ).mouseover(function() {
    $( ".text2" ).addClass( "showcap" );
    $(".map-img").attr("src", "style/svg/map-easter.svg");
  });
  $( ".item2" ).mouseout(function() {
    $( ".text2" ).removeClass( "showcap" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item3" ).mouseover(function() {
    $( ".text3" ).addClass( "showcap" );
  });
  $( ".item3" ).mouseout(function() {
    $( ".text3" ).removeClass( "showcap" );
  });

  $( ".item4" ).mouseover(function() {
    $( ".text4" ).addClass( "showcap" );
  });
  $( ".item4" ).mouseout(function() {
    $( ".text4" ).removeClass( "showcap" );
  });

  $( ".item5" ).mouseover(function() {
    $( ".text5" ).addClass( "showcap" );
  });
  $( ".item5" ).mouseout(function() {
    $( ".text5" ).removeClass( "showcap" );
  });

});
