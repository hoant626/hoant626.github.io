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
    $( ".img2, .img3, .img4, .img5" ).addClass( "desaturate" );
  });
  $( ".item1" ).mouseout(function() {
    $( ".text1" ).removeClass( "showcap" );
    $( ".img2, .img3, .img4, .img5" ).removeClass( "desaturate" );
  });

  $( ".item2" ).mouseover(function() {
    $( ".text2" ).addClass( "showcap" );
    $( ".img1, .img3, .img4, .img5" ).addClass( "desaturate" );
    $(".map-img").attr("src", "style/svg/map-easter.svg");
  });
  $( ".item2" ).mouseout(function() {
    $( ".text2" ).removeClass( "showcap" );
    $( ".img1, .img3, .img4, .img5" ).removeClass( "desaturate" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item3" ).mouseover(function() {
    $( ".text3" ).addClass( "showcap" );
    $( ".img1, .img2, .img4, .img5" ).addClass( "desaturate" );
  });
  $( ".item3" ).mouseout(function() {
    $( ".text3" ).removeClass( "showcap" );
    $( ".img1, .img2, .img4, .img5" ).removeClass( "desaturate" );
  });

  $( ".item4" ).mouseover(function() {
    $( ".text4" ).addClass( "showcap" );
    $( ".img1, .img2, .img3, .img5" ).addClass( "desaturate" );
  });
  $( ".item4" ).mouseout(function() {
    $( ".text4" ).removeClass( "showcap" );
    $( ".img1, .img2, .img3, .img5" ).removeClass( "desaturate" );
  });

  $( ".item5" ).mouseover(function() {
    $( ".text5" ).addClass( "showcap" );
    $( ".img1, .img2, .img3, .img4" ).addClass( "desaturate" );
  });
  $( ".item5" ).mouseout(function() {
    $( ".text5" ).removeClass( "showcap" );
    $( ".img1, .img2, .img3, .img4" ).removeClass( "desaturate" );
  });

});
