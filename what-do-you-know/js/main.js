$(document).ready(function() {

console.log("ready")
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

//howmuch button
  $(function() {
      //caches a jQuery object containing the header element
      var score = $(".howmuch");
      $("body").scroll(function() {
          var scroll = $("body").scrollTop();

          if (scroll >= 500) {
          //  score.removeClass('hide').fadeIn(300);
            score.fadeIn(300);;
          } else {
            //score.addClass('hide').fadeOut(300);
            score.fadeOut(300);
          }
      });
  });


//change text in button
  $( ".howmuch" ).mouseover(function() {
    $( ".next" ).removeClass( "hide" );
    $( ".score, .slash, .outof" ).addClass( "hide" );
  });
  $( ".howmuch" ).mouseout(function() {
    $( ".next" ).addClass( "hide" );
    $( ".score, .slash, .outof" ).removeClass( "hide" );
  });

//select from gallery
  $(".art-1").click(function(){
    $(this).toggleClass('clicked');
    $('.score').html($('.clicked').length);
  });

//click next
  $(".howmuch").click(function() {
    $(".art-1.clicked").fadeOut(300);
    jQuery.makeArray($(".art-1.clicked"))
      .map(i => i.attributes["data-showdiv"].value)
      .forEach((attribute) => {
        $(`#tag-${attribute.split('art-').join('')}`).fadeIn(300);
      });
    $("html, body").animate({scrollTop: 0}, 1000);
  });

});
