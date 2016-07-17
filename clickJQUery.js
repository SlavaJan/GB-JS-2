$(document).ready(function(){
	$('.tile').click(function(){
		$('.active').removeClass('active');
		$(this).toggleClass('active');

	});
});
