$(document).ready(function(){
	
	$("input").click(function(){
		var theInputCliked = $(this);
		var card = theInputCliked.closest('.card');
		var img = card.find('.image img');
		img.toggle();
	});
	
	$(".spoiler .quest").click(function(){
		$(this)
			.closest('.spoiler')
			.find('.answer')
			.toggle();
	});
	
	$('.icon.close').click(function(){
		$(this)
			.closest('.popup-parent')
			.hide();
	});
	
	$('.add-girl').click(function(){
		var path = $('.girl-path').val();
		
		var card = $('.template .card').clone();
		
		card.find('.image img').attr('src', path);
		
		$('.center-block > .content').append(card);
		
	});

	$('.header').click(function(){
		$('.popup-parent').show();
	});
});



