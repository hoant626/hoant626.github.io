$(function() {

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
    var czkNum = czk*(5);
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
    var hkdNum = hkd*(15);
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
    var idrNum = idr/15;
    $('.idr').css("width", idrNum + 'px');
    $('.idr').css("height", idrNum + 'px');

    var ils = data.rates.ILS;
    var ilsNum = ils*(10);
    $('.ils').css("width", ilsNum + 'px');
    $('.ils').css("height", ilsNum + 'px');

    var inr = data.rates.INR;
    var inrNum = inr*(5);
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
    var krwNum = krw/2;
    $('.krw').css("width", krwNum + 'px');
    $('.krw').css("height", krwNum + 'px');

    var mxn = data.rates.MXN;
    var mxnNum = mxn*(5);
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
    var phpNum =  php*(5);
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
    var rubNum =  rub*(5);
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
    var thbNum =  thb*(5);
    $('.thb').css("width", thbNum + 'px');
    $('.thb').css("height", thbNum + 'px');

    var tr = data.rates.TRY;
    var trNum =  tr*(10);
    $('.try').css("width", trNum + 'px');
    $('.try').css("height", trNum + 'px');

    var zar = data.rates.ZAR;
    var zarNum =  zar*(5);
    $('.zar').css("width", zarNum + 'px');
    $('.zar').css("height", zarNum + 'px');

  });
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }

  /* If the user clicks anywhere outside the select box,
  then close all select boxes: */
  document.addEventListener("click", closeAllSelect);


});
