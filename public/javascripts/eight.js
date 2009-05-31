$(function() {
	$('#question').change(function() {
		$('#answer').fadeOut(function() {
			$.getJSON('http://localhost:4567/shake?question=' + $('#question').val(), function(json) {
				$('#answer').html(json.answer);
				$('#answer').fadeIn(function() {
					$('#history').append('<li><span class="q">' + $('#question').val() + '</span><br/><span class="a">' + json.answer + '</span></li>');
				});
			 });
		});

		return false;
	});
});