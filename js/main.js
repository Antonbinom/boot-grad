$(document).ready(function () {

	let burgerButton = document.querySelector('.burger-button');
	burgerButton.addEventListener('click', function () {
		document.querySelector('.header__burger-menu').classList.toggle('header__burger-menu--hidden');
	});

});