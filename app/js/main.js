const btn = document.querySelector(".menu__btn");
const btnClose = document.querySelector(".mobile-icon-close");
const btnOpen = document.querySelector(".mobile-icon-burger");
const mobileMenu = document.querySelector('.mobile-menu__wrapper')
console.log(btn);
console.log(btnClose);

btn.addEventListener("click", openModal)
function openModal(e) {
	console.log(e.target);
	btnOpen.classList.toggle("is-headen");
	btnClose.classList.toggle("is-headen");
	mobileMenu.classList.toggle("open")
	document.body.classList.toggle("modal-open");

	
}