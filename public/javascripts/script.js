$(document).ready(function() {
	$('#btn-open-nav').click(function() {
		$('#sidenav').css('width', '250px');
		$('#main').css('marginLeft', '250px');
	});

	$('#btn-close-nav').click(function() {
		$('#sidenav').css('width', '0');
		$('#main').css('marginLeft', '0');
	});
});