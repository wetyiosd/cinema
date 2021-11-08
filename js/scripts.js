const schemeSvg = document.querySelector('.scheme_svg');
const totalPriceTag = document.querySelector(".price_total");
const menuButton = document.querySelector(".m_menu");
const menu = document.querySelector(".menu");
let cost = 500;
let totalPrice = 0;
schemeSvg.addEventListener('click', (event) => {
	if (!event.target.classList.contains('booked')){
		event.target.classList.toggle("active");
		let totalSeat = schemeSvg.querySelectorAll(".active").length;
		totalPrice =  totalSeat * cost;
		totalPriceTag.textContent = totalPrice;
	}
});

menuButton.addEventListener('click', (event) => {
	menu.classList.toggle("is-open")
});
