$(document).on('keypress', function(e) {
  var key = e.key;
  var img;
  var text;

  console.log('keypress:', key);

  if ( key == 'a' ) {
    img = 'img/a.gif';
  } else if ( key == 'b' ) {
    img = 'img/b.gif';
  } else if ( key == 'c' ) {
    img = 'img/c.gif';
  } else if ( key == 'd' ) {
    img = 'img/d.gif';
  } else if ( key == 'e' ) {
    img = 'img/e.gif';
  } else if ( key == 'f' ) {
    img = 'img/f.gif';
  } else if ( key == 'g' ) {
    img = 'img/g.gif';
  } else if ( key == 'h' ) {
    img = 'img/h.gif';
  } else if ( key == 'i' ) {
    img = 'img/i.gif';
  } else if ( key == 'j' ) {
    img = 'img/j.gif';
  } else if ( key == 'k' ) {
    img = 'img/k.gif';
  } else if ( key == 'l' ) {
    img = 'img/l.gif';
  } else if ( key == 'm' ) {
    img = 'img/m.gif';
  } else if ( key == 'n' ) {
    img = 'img/n.gif';
  } else if ( key == 'o' ) {
    img = 'img/o.gif';
  } else if ( key == 'p' ) {
    img = 'img/p.gif';
  } else if ( key == 'q' ) {
    img = 'img/q.gif';
  } else if ( key == 'r' ) {
    img = 'img/r.gif';
  } else if ( key == 's' ) {
    img = 'img/s.gif';
  } else if ( key == 't' ) {
    img = 'img/t.gif';
  } else if ( key == 'u' ) {
    img = 'img/u.gif';
  } else if ( key == 'v' ) {
    img = 'img/v.gif';
  } else if ( key == 'w' ) {
    img = 'img/w.gif';
  } else if ( key == 'x' ) {
    img = 'img/x.gif';
  } else if ( key == 'y' ) {
    img = 'img/y.gif';
  } else if ( key == 'z' ) {
    img = 'img/z.gif';
  } else if ( key == '!' ) {
    img = 'img/exclamation.gif';
  } else if ( key == '?' ) {
    img = 'img/question.gif';
  }

  // etc.

  if ( img ) {
    $('body').append('<img src="' + img + '" style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); max-width: 300px;">');
  } else {
    $('body').append('<h2 style="position: fixed; top: '+ Math.random() * 100 + '%; left: ' + Math.random() * 100 + '%; transform: translate(-50%, -50%); font-size: ' + Math.random() * 200 + 'px;">' + key + '</h2>');
  }
});
