$(function(){
  console.log("HI");
  $('#addLocation').click(function(e){
    console.log("Add Locations");
    $('#locations').append("<tr><td>HI</td></tr>");
  });
  $('#findLocations').click(function(e){
    console.log("Find Locations");
    console.log($('#zipcode').val());
    // $('#locations').append("<tr><td>"+$('#zipcode').text()+"</td></tr>");
    // var closeLocations = {search: $('zipcode')}
  });
});