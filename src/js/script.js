const burgerMenu = document.querySelector('.burger-menu')
const shadowModal = document.querySelector('.nav-links__shadow-modal')
const navLinks = document.querySelector('.nav-links')
const body = document.querySelector('body')

const burgerAnimation = () => {
	burgerMenu.classList.toggle('open')
	navLinks.classList.toggle('is-active')
	shadowModal.classList.toggle('is-active')

	if (navLinks.classList.contains('is-active')) {
		body.style.overflow = 'hidden'
	}
}

burgerMenu.addEventListener('click', burgerAnimation)
