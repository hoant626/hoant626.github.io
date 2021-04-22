
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
    if($(".howmuch").hasClass("button-clicked")){
      $( ".next, .score, .slash, .outof" ).addClass( "hide" );
      $( ".back" ).removeClass( "hide" );
    } else {
      $( ".next" ).removeClass( "hide" );
      $( ".back, .score, .slash, .outof" ).addClass( "hide" );
    }
  });
  $( ".howmuch" ).mouseout(function() {
    $( ".next, .back" ).addClass( "hide" );
    $( ".score, .slash, .outof" ).removeClass( "hide" );
  });

//select from gallery
  $(".art-1").click(function(){
    $(this).toggleClass('clicked');
    $('.score').html($('.clicked').length);
  });

//click next
  $(".howmuch").click(function() {
    if($('.howmuch').hasClass('button-clicked')) {
      location.reload();
    } else {
      $(this).toggleClass('button-clicked');
      $(".art-1").fadeOut(300);
      jQuery.makeArray($(".art-1[data-showdiv]:not(.clicked)"))
        .map(i => i.attributes["data-showdiv"].value)
        .forEach((attribute) => {
          //$(`#tag-${attribute.split('art-').join('')}`).fadeIn(300);
          $(`#tag-${attribute.split('art-').join('')}`).css({opacity: 0, display: 'flex'}).animate({
                  opacity: 1
              }, 1000);
        });
      $("html, body").animate({scrollTop: 0}, 1000);
    }
  });


});
