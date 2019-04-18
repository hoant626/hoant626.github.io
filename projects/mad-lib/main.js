
$.get('https://www.dylanfisher.com/api.json', function(data) {
  console.log(data);
}).fail(function() {
  console.log('Error in GET request. Handle the error gracefully.');
});
