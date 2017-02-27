$(function() {
  $('select').selectric();
})
var input = document.getElementById("zip");
var awesomplete = new Awesomplete(input);
new Awesomplete(input, {
	list: [
		[ "Nowheresville XX 00000", "Nowheresville XX 00000" ],
		[ "China", "CN" ],
		[ "United States", "US" ]
	]
});
$( "#category" ).change(function() {
  $('.modal.chekbox').show();
});
$( "#cant, .read" ).click(function() {
  $('.modal.categories').show();
});

$( ".close" ).click(function() {
  $('.modal').hide();
});