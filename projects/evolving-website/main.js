$(function() {

//api
  var exchange = 'https://api.exchangeratesapi.io/latest?base=USD'

  $.get(exchange, function(data) {
    console.log(data);

    var aud = data.rates.AUD;
    var audNum = aud*(10);
    $('.aud').css("width", audNum + 'px');
    $('.aud').css("height", audNum + 'px');

    var bgn = data.rates.BGN;
    var bgnNum = bgn*(10);
    $('.bgn').css("width", bgnNum + 'px');
    $('.bgn').css("height", bgnNum + 'px');

    var brl = data.rates.BRL;
    var brlNum = brl*(10);
    $('.brl').css("width", brlNum + 'px');
    $('.brl').css("height", brlNum + 'px');

    var cad = data.rates.CAD;
    var cadNum = cad*(10);
    $('.cad').css("width", cadNum + 'px');
    $('.cad').css("height", cadNum + 'px');

    var chf = data.rates.CHF;
    var chfNum = chf*(10);
    $('.chf').css("width", chfNum + 'px');
    $('.chf').css("height", chfNum + 'px');

    var cny = data.rates.CNY;
    var cnyNum = cny*(10);
    $('.cny').css("width", cnyNum + 'px');
    $('.cny').css("height", cnyNum + 'px');

    var czk = data.rates.CZK;
    var czkNum = czk*(10);
    $('.czk').css("width", czkNum + 'px');
    $('.czk').css("height", czkNum + 'px');

    var dkk = data.rates.DKK;
    var dkkNum = dkk*(10);
    $('.dkk').css("width", dkkNum + 'px');
    $('.dkk').css("height", dkkNum + 'px');

    var eur = data.rates.EUR;
    var eurNum = eur*(10);
    $('.eur').css("width", eurNum + 'px');
    $('.eur').css("height", eurNum + 'px');

    var gbp = data.rates.GBP;
    var gbpNum = gbp*(10);
    $('.gbp').css("width", gbpNum + 'px');
    $('.gbp').css("height", gbpNum + 'px');

    var hkd = data.rates.HKD;
    var hkdNum = hkd*(10);
    $('.hkd').css("width", hkdNum + 'px');
    $('.hkd').css("height", hkdNum + 'px');

    var hrk = data.rates.HRK;
    var hrkNum = hrk*(10);
    $('.hrk').css("width", hrkNum + 'px');
    $('.hrk').css("height", hrkNum + 'px');

    var huf = data.rates.HUF;
    var hufNum = huf;
    $('.huf').css("width", hufNum + 'px');
    $('.huf').css("height", hufNum + 'px');

    var idr = data.rates.IDR;
    var idrNum = idr/4;
    $('.idr').css("width", idrNum + 'px');
    $('.idr').css("height", idrNum + 'px');

    var ils = data.rates.ILS;
    var ilsNum = ils*(10);
    $('.ils').css("width", ilsNum + 'px');
    $('.ils').css("height", ilsNum + 'px');

    var inr = data.rates.INR;
    var inrNum = inr*(10);
    $('.inr').css("width", inrNum + 'px');
    $('.inr').css("height", inrNum + 'px');

    var isk = data.rates.ISK;
    var iskNum = isk;
    $('.isk').css("width", iskNum + 'px');
    $('.isk').css("height", iskNum + 'px');

    var jpy = data.rates.JPY;
    var jpyNum = jpy;
    $('.jpy').css("width", jpyNum + 'px');
    $('.jpy').css("height", jpyNum + 'px');

    var krw = data.rates.KRW;
    var krwNum = krw;
    $('.krw').css("width", krwNum + 'px');
    $('.krw').css("height", krwNum + 'px');

    var mxn = data.rates.MXN;
    var mxnNum = mxn*(10);
    $('.mxn').css("width", mxnNum + 'px');
    $('.mxn').css("height", mxnNum + 'px');

    var myr = data.rates.MYR;
    var myrNum =  myr*(10);
    $('.myr').css("width", myrNum + 'px');
    $('.myr').css("height", myrNum + 'px');

    var nok = data.rates.NOK;
    var nokNum =  nok*(10);
    $('.nok').css("width", nokNum + 'px');
    $('.nok').css("height", nokNum + 'px');

    var nzd = data.rates.NZD;
    var nzdNum =  nzd*(10);
    $('.nzd').css("width", nzdNum + 'px');
    $('.nzd').css("height", nzdNum + 'px');

    var php = data.rates.PHP;
    var phpNum =  php*(10);
    $('.php').css("width", phpNum + 'px');
    $('.php').css("height", phpNum + 'px');

    var pln = data.rates.PLN;
    var plnNum =  pln*(10);
    $('.pln').css("width", plnNum + 'px');
    $('.pln').css("height", plnNum + 'px');

    var ron = data.rates.RON;
    var ronNum =  ron*(10);
    $('.ron').css("width", ronNum + 'px');
    $('.ron').css("height", ronNum + 'px');

    var rub = data.rates.RUB;
    var rubNum =  rub*(10);
    $('.rub').css("width", rubNum + 'px');
    $('.rub').css("height", rubNum + 'px');

    var sek = data.rates.SEK;
    var sekNum =  sek*(10);
    $('.sek').css("width", sekNum + 'px');
    $('.sek').css("height", sekNum + 'px');

    var sgd = data.rates.SGD;
    var sgdNum =  sgd*(10);
    $('.sgd').css("width", sgdNum + 'px');
    $('.sgd').css("height", sgdNum + 'px');

    var thb = data.rates.THB;
    var thbNum =  thb*(10);
    $('.thb').css("width", thbNum + 'px');
    $('.thb').css("height", thbNum + 'px');

    var tr = data.rates.TRY;
    var trNum =  tr*(10);
    $('.try').css("width", trNum + 'px');
    $('.try').css("height", trNum + 'px');

    var zar = data.rates.ZAR;
    var zarNum =  zar*(10);
    $('.zar').css("width", zarNum + 'px');
    $('.zar').css("height", zarNum + 'px');

    $('.ball').click(function() {
      console.log("wow");
      $(this).toggleClass('active');

      //DO SOMETHING ABOUT THIS!!!
      var currency = $(this).data('currency');
      var actCurrency = currency.toUpperCase();
      var value = data.rates[actCurrency];
      console.log(actCurrency);


      var infoHTML = '<div class="info info-' + currency + '">' +
                       '<p>1 USD' + ' = ' +
                       value +
                       ' '+
                       actCurrency +
                       '</p>' +
                     '</div>';

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

      var to = getRandomInt(90);
      var le = getRandomInt(80);

      $('body').append(infoHTML);

      var $info = $('.info-' + currency);

      $info.css("top", to + 'vh');
      $info.css("left", le + 'vw');

      if ($(this).hasClass('active')) {
        $info.css("visibility", 'visible');
      } else {
        $info.css("visibility", 'hidden');
      }

      // $('.value').text();
      // $('.currency').html();

    });

  });



});
