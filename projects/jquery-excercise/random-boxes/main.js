$(function() {
  // Your interactions go here
  $('.button').click(function() {
    console.log("wee")

    var number = Math.floor((Math.random() * 5) + 1);
    console.log (number)

    $('.box').removeClass('active');
    $('.box').eq(number).addClass('active');
  });

});
