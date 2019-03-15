
$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');

  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $('div.line').nextAll().addClass('active');

    console.log(m)

    var square = $('.square');
    var random = Math.random() * 100;

    $('.square').css('top', random +'%')
    $('.square').css('left', random +'%')

    var divsize = ((Math.random()*100) + 50).toFixed();
    $newdiv = $('<div/>').css({
           'width':divsize+'px',
           'height':divsize+'px',
           'background-color': color
       });
    $newdiv.css({
            'position':'absolute',
            'left':posx+'px',
            'top':posy+'px',
            'display':'none'
        })
  $('div.square').nextAll().addClass('active');

    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
});
