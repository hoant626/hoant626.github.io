$(function(){
  $('.header').data('size','big');
});

$(window).scroll(function(){
  if($(document).scrollTop() > 0)
{
    if($('.header').data('size') == 'big')
    {
        $('.header').data('size','small');
        $('.header').stop().animate({
            height:'50px'
        },600);
        $('.title').stop().animate({
            width:'0px'
        },600);
        $('.sub').stop().animate({
            top: '15px'
        },600);
        $('.block').stop().animate({
            height: '50px'
        },600);
    }
}
else
  {
    if($('.header').data('size') == 'small')
      {
        $('.header').data('size','big');
        $('.header').stop().animate({
            height:'200px',
        },200);
        $('.title').stop().animate({
          width: '450px',
        },600);
        $('.sub').stop().animate({
            top: '165px'
        },700);
        $('.block').stop().animate({
          height: '200px'
        },600);
      }
  }
});
