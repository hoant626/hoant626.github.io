$(function() {

  $( document ).ready(function() {
      console.log( "ready!" );
      $('.adjective1').html("_____");
      $('.adjective2').html("_____");
      $('.artSupply').html("_____");
      $('.computerSoftware').html("_____");
      $('.websiteName').html("_____");
      $('.artistName').html("_____");
      $('.celebrityName').html("_____");
      $('.noun1').html("_____");
      $('.noun2').html("_____");
      $('.pluralNoun1').html("_____");
      $('.pluralNoun2').html("_____");
      $('.pluralNoun3').html("_____");
      $('.verbEndingInIng').html("_____");
      $('.placeInNewYork').html("_____");
      $('.bodyPart').html("_____");
      $('.foods').html("_____");
      $('.number1').html("_____");
      $('.number2').html("_____");

  });

  $('.button').click(function(){
    var url = $(this).data('url');
    console.log(url)
    $(this).addClass('active');

    $.get(url, function(data) {
      console.log(data);
      var adjective1 = data.adjective1;
      var adjective2 = data.adjective2;
      var artSupply = data.artSupply;
      var computerSoftware = data.computerSoftware;
      var websiteName = data.websiteName;
      var artistName = data.artistName;
      var celebrityName = data.celebrityName;
      var noun1 = data.noun1;
      var noun2 = data.noun2;
      var pluralNoun1 = data.pluralNoun1;
      var pluralNoun2 = data.pluralNoun2;
      var pluralNoun3 = data.pluralNoun3;
      var verbEndingInIng = data.verbEndingInIng;
      var placeInNewYork = data.placeInNewYork;
      var bodyPart = data.bodyPart;
      var number1 = data.numbers[0];
      var number2 = data.numbers[1];
      var foods = data.foods.join(', ');


      $('.adjective1').html(adjective1);
      $('.adjective2').html(adjective2);
      $('.artSupply').html(artSupply);
      $('.computerSoftware').html(computerSoftware);
      $('.websiteName').html(websiteName);
      $('.artistName').html(artistName);
      $('.celebrityName').html(celebrityName);
      $('.noun1').html(noun1);
      $('.noun2').html(noun2);
      $('.pluralNoun1').html(pluralNoun1);
      $('.pluralNoun2').html(pluralNoun2);
      $('.pluralNoun3').html(pluralNoun3);
      $('.verbEndingInIng').html(verbEndingInIng);
      $('.placeInNewYork').html(placeInNewYork);
      $('.bodyPart').html(bodyPart);
      $('.foods').html(foods);
      $('.number1').html(number1);
      $('.number2').html(number2);


    }).fail(function(error) {
      console.log('Error in GET request. Handle the error gracefully.', error);
      console.error(error.statusText)
      $('.adjective1').html("_____");
      $('.adjective2').html("_____");
      $('.artSupply').html("_____");
      $('.computerSoftware').html("_____");
      $('.websiteName').html("_____");
      $('.artistName').html("_____");
      $('.celebrityName').html("_____");
      $('.noun1').html("_____");
      $('.noun2').html("_____");
      $('.pluralNoun1').html("_____");
      $('.pluralNoun2').html("_____");
      $('.pluralNoun3').html("_____");
      $('.verbEndingInIng').html("_____");
      $('.placeInNewYork').html("_____");
      $('.bodyPart').html("_____");
      $('.foods').html("_____");
      $('.number1').html("_____");
      $('.number2').html("_____");

    });
  });
})
