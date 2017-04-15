$(document).ready(function() {
	$('#btn-open-nav').click(function() {
		$('#sidenav').css('width', '250px');
	});

	$('#btn-close-nav').click(function() {
		$('#sidenav').css('width', '0');
	});

	// slider
	var teamSlider = '.team-slider';
		translateElement = 0,
		translateRange = getElementWidth(teamSlider) / getNumberOfChildElement(teamSlider);

	function getNumberOfChildElement(elm) {
		return $(elm).children().length;
	};

	function getElementWidth(elm) {
		if ($(elm).parent().width() > $(elm).width()) return $(elm).parent().width()
		return $(elm).width();
	};

	$('.team-back').click(function() {
		if (translateElement <= 0 - translateRange) {
			translateElement += translateRange;
			$(teamSlider).css({
				"-webkit-transform": "translate(" + translateElement + "px)",
				"-ms-transform": "translate(" + translateElement + "px)",
				"transform": "translate(" + translateElement + "px)"
			})
		}
	});

	$('.team-next').click(function() {
		if (translateElement > -Math.abs($(teamSlider).parent().width() - $(teamSlider).width()) && $(teamSlider).parent().width() < $(teamSlider).width()) {
			translateElement -= translateRange;
			$(teamSlider).css({
				"-webkit-transform": "translate(" + translateElement + "px)",
				"-ms-transform": "translate(" + translateElement + "px)",
				"transform": "translate(" + translateElement + "px)"
			})
		}
	});
});