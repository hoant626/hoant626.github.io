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
    $( ".img1" ).addClass( "enlarge" );
    $( ".item1" ).addClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-stela.svg");
  });
  $( ".item1" ).mouseout(function() {
    $( ".text1" ).removeClass( "showcap" );
    $( ".img2, .img3, .img4, .img5" ).removeClass( "desaturate" );
    $( ".img1" ).removeClass( "enlarge" );
    $( ".item1" ).removeClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item2" ).mouseover(function() {
    $( ".text2" ).addClass( "showcap" );
    $( ".img1, .img3, .img4, .img5" ).addClass( "desaturate" );
    $( ".img2" ).addClass( "enlarge" );
    $( ".item2" ).addClass( "item-selected-l" );
    $(".map-img").attr("src", "style/svg/map-easteri.svg");
  });
  $( ".item2" ).mouseout(function() {
    $( ".text2" ).removeClass( "showcap" );
    $( ".img1, .img3, .img4, .img5" ).removeClass( "desaturate" );
    $( ".img2" ).removeClass( "enlarge" );
    $( ".item2" ).removeClass( "item-selected-l" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item3" ).mouseover(function() {
    $( ".text3" ).addClass( "showcap" );
    $( ".img1, .img2, .img4, .img5" ).addClass( "desaturate" );
    $( ".img3" ).addClass( "enlarge" );
    $( ".item3" ).addClass( "item-selected-l" );
    $(".map-img").attr("src", "style/svg/map-benin.svg");
  });
  $( ".item3" ).mouseout(function() {
    $( ".text3" ).removeClass( "showcap" );
    $( ".img1, .img2, .img4, .img5" ).removeClass( "desaturate" );
    $( ".img3" ).removeClass( "enlarge" );
    $( ".item3" ).removeClass( "item-selected-l" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item4" ).mouseover(function() {
    $( ".text4" ).addClass( "showcap" );
    $( ".img1, .img2, .img3, .img5" ).addClass( "desaturate" );
    $( ".img4" ).addClass( "enlarge" );
    $( ".item4" ).addClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-koh.svg");
  });
  $( ".item4" ).mouseout(function() {
    $( ".text4" ).removeClass( "showcap" );
    $( ".img1, .img2, .img3, .img5" ).removeClass( "desaturate" );
    $( ".img4" ).removeClass( "enlarge" );
    $( ".item4" ).removeClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

  $( ".item5" ).mouseover(function() {
    $( ".text5" ).addClass( "showcap" );
    $( ".img1, .img2, .img3, .img4" ).addClass( "desaturate" );
    $( ".img5" ).addClass( "enlarge" );
    $( ".item5" ).addClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-priam.svg");

  });
  $( ".item5" ).mouseout(function() {
    $( ".text5" ).removeClass( "showcap" );
    $( ".img1, .img2, .img3, .img4" ).removeClass( "desaturate" );
    $( ".img5" ).removeClass( "enlarge" );
    $( ".item5" ).removeClass( "item-selected" );
    $(".map-img").attr("src", "style/svg/map-base.svg");
  });

});
