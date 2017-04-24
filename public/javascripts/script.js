$(document).ready(function() {
	$('#btn-open-nav').click(function() {
		$('#menubar').css('width', '250px');
	});

	$('#btn-close-nav').click(function() {
		$('#menubar').css('width', '0');
	});

	// navigator
	$('.navigator a').on('click', function(event) {
		if (this.hash !== '') {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function() {
				window.location.hash = hash;
			});
		}
	});

	$('.square-img').css('height', $('.square-img').width() + 'px');

	// desktop menubar
	$(window).bind('scroll', function () {
		if ($(window).width() > 767)
			$('.menubar').css('height', $(window).scrollTop() > 100 ? '70px' : '100px')
	});

	// slick slider
	$('.slick-slider').slick({
		mobileFirst: true,
		arrows: false,
		autoplay: true,
		responsive: [{
			breakpoint: 639,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 799,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 1199,
			settings: {
				slidesToShow: 4,
			}
		}]
	});

	// play video
	var videoSrc = 'https://www.youtube.com/embed/Q_4VB2_mX_Q?rel=0&amp;controls=1&amp;showinfo=1&loop=1&playlist=Q_4VB2_mX_Q'

	$('.play-video').click(function() {
		$('body').css('overflow', 'hidden')
		$('.video-area').addClass('on-video-played');
		$('.iframe-video, .close-video').css('display', 'block');
		$('.iframe-video').prop('src', videoSrc + '&autoplay=1');
	});

	$('.close-video').click(function() {
		$('body').css('overflow', 'auto')
		$('.video-area').removeClass('on-video-played');
		$('.iframe-video, .close-video').css('display', 'none');
		$('.iframe-video').prop('src', videoSrc + '&autoplay=0');
	})

	// porfolio filter
	var selectedClass = '';
	$('.fil-cat').click(function() {
		$('.fil-cat').css('color', '#000');
		$(this).css('color', '#e65231');
		selectedClass = $(this).attr('data-rel');
		$('#portfolio').fadeTo(100, .1);
		$('#portfolio div').not('.' + selectedClass).not('.info, .desc, .price').fadeOut().removeClass('scale-anm');
		setTimeout(function() {
			$('.' + selectedClass).fadeIn().addClass('scale-anm');
			$('#portfolio').fadeTo(300, 1);
		}, 300); 
	});

	//show all production
	$('.all-prd').click(function() {
		$('.prd-item').css('display', 'block');
		$(this).css('display', 'none');
	})
});
