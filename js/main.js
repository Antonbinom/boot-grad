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

});