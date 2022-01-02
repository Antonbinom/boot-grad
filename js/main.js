$(document).ready(function () {

	// Burger Menu
	var burgerButton = document.querySelector('.burger-button');
	var menuLink = document.querySelector('.header__burger-link');

	// Закрытие/открытие бургер меню при клике на кнопку
	burgerButton.addEventListener('click', function () {
		document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--visible');
	});

	// Закрытие бургер меню при клике на ссылку
	document.querySelectorAll('.header__burger-link').forEach(a => {
		a.addEventListener('click', e => {
			$('.header__burger-menu').removeClass('header__burger-menu--visible');
		});
	});


	// Silck Slider - секция 5 фактов
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
				breakpoint: 576,
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

	var navLink = $('.header__menu-link');
	navLink.on('click', function (event) {
		event.preventDefault();
		var target = $(this).attr('href');
		var top = $(target).offset().top - '60';
		$('html,body').animate({
			scrollTop: top
		}, 500);
	});

	// Плавный скролл якорных ссылок
	// $(function () {
	// $("a[href^='#']").click(function () {
	// 	var _href = $(this).attr('href');
	// 	$('html, body').animate({
	// 			scrollTop: $(_href).offset().top + 'px',
	// 		},
	// 		1000
	// 	);
	// 	return false;
	// });
	// });

	// Вызов/закрытие модального окна
	var modalButton = $('[data-toggle=modal]');
	var closeModalButton = $('.modal-close');
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);
	$('body').removeClass('hold');

	var modalOverlay = $('.modal__overlay');
	var modalDialog = $('.modal__dialog');
	var modalSuccessOverlay = $('.modal__overlay-success');
	var modalSuccessDialog = $('.modal__success');

	function openModal() {
		modalOverlay.addClass('modal__overlay--visible');
		modalDialog.addClass('modal__dialog--visible');
		$('body').addClass('hold');
	}

	// Закрытие формы при нажатии на крестик
	function closeModal(event) {
		event.preventDefault();
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
		modalSuccessOverlay.addClass('modal__overlay-success--hidden');
		modalSuccessDialog.addClass('modal__success--hidden');
		$('body').removeClass('hold');
	}

	// Закрытие формы при нажатии клавиши ESC
	$(document).on('keydown', function (event) {
		if (event.code == 'Escape') {
			modalDialog.removeClass('modal__dialog--visible');
			modalOverlay.removeClass('modal__overlay--visible');
			modalSuccessOverlay.addClass('modal__overlay-success--hidden');
			modalSuccessDialog.addClass('modal__success--hidden');
			$('body').removeClass('hold');
		}
	});
	// Закрытие модального окна при клике на маску
	$('.modal').on('click', function () {
		modalDialog.removeClass('modal__dialog--visible');
		modalOverlay.removeClass('modal__overlay--visible');
		modalSuccessOverlay.addClass('modal__overlay-success--hidden');
		modalSuccessDialog.addClass('modal__success--hidden');
		$('body').removeClass('hold');
	});

	// Отменяет закрытие моального окна при клике на него
	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation();
	});

	// Блокировка Copy Paste для телефона
	$('input').bind('copy paste', function (e) {
		e.preventDefault();
	});

	// Маска ввода номера телефона (плагин maskedinput)
	$('.input-phone').mask("+7 (999) 999 - 9999", {
		autoclear: false
	});
});