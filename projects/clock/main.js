
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
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 300;

    // hour

    $('div.line').nextUntil('div.l' + h).addClass('active');
    $('div.l'+h).nextAll().removeClass('active');

    //minute
    if (m==0) {
      $('div.square').removeClass('active');
    } else {
      $('div.square').nextUntil('div.s'+ m).addClass('active');
      $('div.s'+m).nextAll().removeClass('active');
    }

    //seconds
    $('div.square').css('border-width', (s/10)+'px');

    //ms

    $('div.msSquare').css('transform', 'rotate(' + (360/60 * s) + 'deg)');
    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
});
