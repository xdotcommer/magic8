$(function() {
	$('.shake').click(function() {
		$('#answer').fadeOut('slow', function() {
			$.getJSON('http://localhost:4567/shake', function(json) {
				$('#answer').html(json.answer);
				$('#answer').fadeIn('slow', function() {
					$('#history').append('<li>' + json.answer + '</li>')
				});
			 });
		});
		return false;
	});
	
	$('.shake').hover(function(){
		$('.shake').addClass('hand')
	});
});