$(document).ready(function(){
	
	$("input").click(function(){
		var theInputCliked = $(this);
		var card = theInputCliked.closest('.card');
		var img = card.find('.image img');
		img.toggle();
	});
	
});
