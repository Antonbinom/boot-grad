$(document).ready(function () {

	// Burger Menu
	let burgerButton = document.querySelector('.burger-button');
	burgerButton.addEventListener('click', function () {
		document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--visible');
	});

	// Silck Slider - секция Facts
	$('.responsive').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		mobileFirst: true,
		responsive: [{
				breakpoint: 767,
				settings: 'unslick'
			},
			{
				breakpoint: 577,
				settings: {
					slidesToShow: 2,
				}
			}
		]
	});

	// Magnific Popup - Видео плеер
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		// disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	// Magnific Popup - Фотогалерея
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			maxWidth: 500,
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function (item) {
				// return item.el.attr('title') + '<small></small>';
			}
		}
	});
});