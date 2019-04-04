$(function() {
  var numbers = [];

  var getRandomNumber = function() {
    var number = Math.floor((Math.random() * 47) + 1);

    while ( numbers.includes(number) ) {
      number = Math.floor((Math.random() * 47) + 1);
      console.log('trying to get another number');
    }

    console.log(numbers);

    numbers.push(number);

    return number;
  }

//popup
  $('.close').click(function() {
    $('.popup').css('visibility', 'hidden');
    var number = getRandomNumber();
    $('.card').eq(number).addClass('active');
  })

//thumbs
  $('.thumbs').click(function() {

    var activeGradient = $('.card.active img');

    if ( $(this).hasClass('up') ) {
      $( '.yes' ).append( activeGradient.clone().addClass('active') );
    } else {
      $( '.no' ).append( activeGradient.clone().addClass('active') );
    }

    $('.card').removeClass('active');
    var number = getRandomNumber();
    $('.card').eq(number).addClass('active');
  })

//up and down
  // $('.up').click(function() {
  //   var number = Math.floor((Math.random() * 49) + 1);
  //   var activeGradient = $('.card.active img');
  //   $( '.yes' ).append( activeGradient.clone() );
  // })

});
