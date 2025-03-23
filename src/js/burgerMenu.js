document.querySelector('.burger-menu__span').addEventListener('click', function () {
	document.querySelector('.burger-menu').classList.toggle('active__menu')
	this.classList.toggle('active__span')
})
