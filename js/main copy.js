  // JQuery
  $(document).ready(function(){

  // Burger Menu
  var menuButton = document.querySelector(".burger-button");
  menuButton.addEventListener("click", function () {
    document.querySelector(".header__burger-menu").classList.toggle("header__burger-menu--visible");
    // $('body').toggleClass('hold');
  });

//   $(function () {
//     $("a[href^='#recommend']").click(function () {
//       var _href = $(this).attr("href");
//       $("html, body").animate(
//         { scrollTop: $(_href).offset().top + "px" },
//         1000
//       );
//       return false;
//     });
//   });

//   $(function () {
//     $("a[href^='#books']").click(function () {
//       var _href = $(this).attr("href");
//       $("html, body").animate(
//         { scrollTop: $(_href).offset().top + "px" },
//         1000
//       );
//       return false;
//     });
//   });

//   $(function () {
//     $("a[href^='#blog']").click(function () {
//       var _href = $(this).attr("href");
//       $("html, body").animate(
//         { scrollTop: $(_href).offset().top + "px" },
//         1000
//       );
//       return false;
//     });
//   });

//   // Likes
//   document.querySelectorAll(".icon-like").forEach((button) => {
//   button.addEventListener("click", (e) => {
//     if (button.getAttribute("fill") === "#959EAD") {
//       button.setAttribute("fill", "#DC143C");
//     } else if (button.getAttribute("fill") === "#DC143C") {
//       button.setAttribute("fill", "#959EAD");
//     }
//   });
// });

//   // Slider 1
//   const sectionsSlider = new Swiper('.sections__slider', {
//     slidesPerView: 4,
//     spaceBetween: 26,
//     breakpoints: {
//       320: {
//         slidesPerView: 2,
//         spaceBetween: 10,
//         slidesPerColumn: 2,
//         slidesPerColumnFill: 'row',
//       },
//       568: {
//         slidesPerView: 2,
//         spaceBetween: 26,
//       },
//       769: {
//         slidesPerView: 3,
//         spaceBetween: 26,
//       },
//       993: {
//         slidesPerView: 4,
//         spaceBetween: 26,
//       },
//     },
//     loop: false,
//     watchOverflow: true,
//     autoHaight: false,

//     // Navigation arrows
//     navigation: {
//       nextEl: '.sections__slider-button--next',
//       prevEl: '.sections__slider-button--prev',
//     },
//     // Keyboard control
//     keyboard: {
//       enabled: true,
//       onlyInViewport: false,
//     },
//   });

//    // Slider 2
//   const swiperUnreleased = new Swiper(".unreleased-container", {
//     slidesPerView: "auto",

//     // Navigation arrows
//     navigation: {
//       nextEl: ".unreleased-button--next",
//       prevEl: ".unreleased-button--prev",
//     },

//     // Keyboard control
//     keyboard: {
//       enabled: true,
//     },
//   });

//   // Main Video
//   $(".video-play-main").on("click", function onYouTubeIframeAPIReady() {
//     player = new YT.Player("main-player", {
//       videoId: "F8MN0o6RS9o",
//       width: '100%',
//       height: '100%',
//       events: {
//         onReady: videoPlay,
//       },
//     });
//   });
//   function videoPlay(event) {
//     event.target.playVideo();
//     event.target.setVolume(10);
//   }

//   // Video 2
//   $(".video-play-2").on("click", function onYouTubeIframeAPIReady() {
//     player = new YT.Player("video-two", {
//       videoId: "I-zPNQYHSvU",
//       width: '100%',
//       height: '100%',
//       events: {
//         onReady: videoPlay,
//       },
//     });
//   });

//   // Video 3
//   $(".video-play-3").on("click", function onYouTubeIframeAPIReady() {
//     player = new YT.Player("video-three", {
//       videoId: "6vnxzfejWN4",
//       width: '100%',
//       height: '100%',
//       events: {
//         onReady: videoPlay,
//       },
//     });
//   });

//   // Video 4
//   $(".video-play-4").on("click", function onYouTubeIframeAPIReady() {
//     player = new YT.Player("video-four", {
//       videoId: "vd205Q_EE18",
//       width: '100%',
//       height: '100%',
//       events: {
//         onReady: videoPlay,
//       },
//     });
//   });
//   //  Modal Window

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  var modalOverlay = $('.modal__overlay');
  var modalDialog = $('.modal__dialog');

  function openModal() {
      modalOverlay.addClass("modal__overlay--visible");
      modalDialog.addClass("modal__dialog--visible");
    $('body').addClass('hold');
  };

  function closeModal(event) {
    event.preventDefault();
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");

    $('body').removeClass('hold');
  };

  $('.modal').on('click', function(event) {
    modalDialog.removeClass('modal__dialog--visible');
    modalOverlay.removeClass('modal__overlay--visible');
    $('body').removeClass('hold');
  });

  $(document).on('keydown', function(event) {
    if (event.code == 'Escape') {
      modalDialog.removeClass('modal__dialog--visible');
      modalOverlay.removeClass('modal__overlay--visible');
      $('body').removeClass('hold');
    };
  });

  $('.modal__dialog').on('click', function(event) {
    event.stopPropagation();
  });
//   jQuery.validator.addMethod(
//     "emailcorect",
//     function (value, element) {
//       return (
//         this.optional(element) ||
//         /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(
//           value
//         )
//       );
//     },
//     "Email format: name@domain.com"
//   );

//   $(".form").each(function () {
// 		$(this).validate({
// 			errorClass: "invalid",
//             rules: {
//                 mail: {
//                   emailcorect: true,
//                 },
//             },
// 			messages: {
// 				name: {
// 					required: "Введите свое имя",
// 					minlength: "Не менее двух символов",
// 				},
// 				phone: {
// 					required: "Укажите ваш телефон",
// 					minlength: "Не менее 11 символов",
// 				},
// 				mail: {
// 					required: "Укажите ваш Email",
// 					email: "Имя почты не верно",
// 				},
// 			},
// 		});
// 	});
//   $(".input-phone").mask("+7 (000) 000-00-00");
//   $(document).ready(function () {

//   function trackScroll() {
//     var scrolled = window.pageYOffset;
//     var coords = document.documentElement.clientHeight;

//     if (scrolled > coords) {
//       goTopBtn.classList.add('button-to-top-show');
//     }
//     if (scrolled < coords) {
//       goTopBtn.classList.remove('button-to-top-show');
//     }
//   }
//   function backToTop() {
//     if (window.pageYOffset > 0) {
//       window.scrollBy(0, -80);
//       setTimeout(backToTop, 10);
//     }
//   }
//   var goTopBtn = document.querySelector('.button-to-top');

//   window.addEventListener('scroll', trackScroll);
//   goTopBtn.addEventListener('click', backToTop);
//   });
});
