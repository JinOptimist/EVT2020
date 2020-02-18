$(document).ready(function(){
	init();
	
	$(".spoiler .quest").click(function(){
		$(this)
			.closest('.spoiler')
			.find('.answer')
			.toggle(1000);
			
		
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
		
		init();
	});

	$('.header').click(function(){
		$('.popup-parent').show();
	});

	$('img').click(function(){
		getExtention($(this));
		console.log(extention);
	});
	
	$('.show-all').click(function(){
		$(".filter:not(:checked)").click();
	});
	
	//$('.remove').click(function(){
	$( ".content" ).on( "click", ".remove", function() {
		$(this).closest('.card').remove();
		init();
	});
	
	
	//$('.filter').change(function(){
	$( ".content" ).on( "change", ".filter", function() {
		var isChecked = $(this).is(':checked');
		var filterExt = $(this).data('ext');
		
		$('.card').each(function(inx, card){
			if (inx == 0){
				return;
			}
			
			var img = $(card).find('img');
			var imgExt = getExtention($(img));
			if (imgExt == filterExt){
				$(card).toggle(isChecked);
			}
		});
	});
	
	function getExtention(jTagImg){
		var path = jTagImg.attr('src');
		var index = path.lastIndexOf('.');
		var extention = path.substring(index + 1);
		return extention;
	}

	function init(){
		$('.filter-block').empty();
		var exts = [];
		$('.content .card').each(function(inx, card){
			if (inx == 0){
				return;
			}
			
			var img = $(card).find('img');
			var imgExt = getExtention($(img));
			
			if (exts.indexOf(imgExt) < 0){
				exts.push(imgExt);
			}
		});
		
		exts.sort();
		
		for(var i = 0; i < exts.length; i++){
			var ext = exts[i];
			
			var filter = $('.template .filter-template').clone();
			filter.find('span').text(ext);
			filter.find('.filter').data('ext', ext);
			$('.filter-block').append(filter);
		}
	}
});




