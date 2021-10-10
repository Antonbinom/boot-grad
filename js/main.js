$(document).ready(function () {

	// Burger Menu
	let burgerButton = document.querySelector('.burger-button');
	burgerButton.addEventListener('click', function () {
		document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--visible');
	});

	// Silck Slider - секция Факты

	$('.facts__cards.responsive').slick({
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		mobileFirst: true,
		responsive: [{
				breakpoint: 768,
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

	// Silck Slider - секция 10 Шагов

	$('.steps__slider.responsive').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		infinite: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
			}
		}]
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

	// Кнопка появляется при пркрутке вниз
	$(window).scroll(function () {
		if ($(this).scrollTop() > 300) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	// При нажатии на кнопку плавный скролл вверх
	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	// Плавный скролл якорных ссылок
	$(function () {
		$("a[href^='#']").click(function () {
			var _href = $(this).attr('href');
			$('html, body').animate({
					scrollTop: $(_href).offset().top + 'px',
				},
				1000
			);
			return false;
		});
	});

	// Вызов/закрытие модального окна
	let modalButton = $('[data-toggle=modal]');
	let closeModalButton = $('.modal-close');
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);

	let modalOverlay = $('.modal__overlay');
	let modalDialog = $('.modal__dialog');

	function openModal() {
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
	};

	function closeModal(event) {
		event.preventDefault();
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	};

	$(document).on('keydown', function (event) {
		if (event.code == 'Escape') {
			modalDialog.removeClass('modal__dialog--visible');
			modalOverlay.removeClass('modal__overlay--visible');
			$('body').removeClass('hold');
		}
	});
	//закрытие при клике на маску
	// $('.modal').on('click', function (event) {
	// 	modalDialog.removeClass('modal__dialog--visible');
	// 	modalOverlay.removeClass('modal__overlay--visible');
	// 	$('body').removeClass('hold');
	// });
});