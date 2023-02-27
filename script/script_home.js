let slide_number = 1;
const family_slide_btn = document.getElementById('slide_options_family');
const family_slide_btn_line = family_slide_btn.querySelector('.slide_options_line');
const family_slide_btn_sign = family_slide_btn.querySelector('.slide_options_family');
const special_slide_btn = document.getElementById('slide_options_special');
const special_slide_btn_line = special_slide_btn.querySelector('.slide_options_line');
const special_slide_btn_sign = special_slide_btn.querySelector('.slide_options_special');
const social_slide_btn = document.getElementById('slide_options_social');
const social_slide_btn_line = social_slide_btn.querySelector('.slide_options_line');
const social_slide_btn_sign = social_slide_btn.querySelector('.slide_options_social');
const slides = document.querySelectorAll(".slide");
const booking_btn = document.querySelectorAll("button");

for (let i=0; i<=4; i++) {
	booking_btn[i].addEventListener("click", () => window.open('booking.html','_self'))
}

family_slide_btn.addEventListener("click", () => {
	if (slide_number == 2 || slide_number == 3) {
		family_slide_btn_line.classList.remove("invisible");
		family_slide_btn_sign.classList.remove("transparent");
		special_slide_btn_line.classList.add("invisible");
		special_slide_btn_sign.classList.add("transparent");
		social_slide_btn_line.classList.add("invisible");
		social_slide_btn_sign.classList.add("transparent");
		slide_number = 1;
		slides[0].classList.remove("invisible");
		slides[1].classList.add("invisible");
		slides[2].classList.add("invisible");
	};
});
special_slide_btn.addEventListener("click", () => {
	if (slide_number == 1 || slide_number == 3) {
		family_slide_btn_line.classList.add("invisible");
		family_slide_btn_sign.classList.add("transparent");
		special_slide_btn_line.classList.remove("invisible");
		special_slide_btn_sign.classList.remove("transparent");
		social_slide_btn_line.classList.add("invisible");
		social_slide_btn_sign.classList.add("transparent");
		slide_number = 2;
		slides[0].classList.add("invisible");
		slides[1].classList.remove("invisible");
		slides[2].classList.add("invisible");
	};
});
social_slide_btn.addEventListener("click", () => {
	if (slide_number == 1 || slide_number == 2) {
		family_slide_btn_line.classList.add("invisible");
		family_slide_btn_sign.classList.add("transparent");
		special_slide_btn_line.classList.add("invisible");
		special_slide_btn_sign.classList.add("transparent");
		social_slide_btn_line.classList.remove("invisible");
		social_slide_btn_sign.classList.remove("transparent");
		slide_number = 3;
		slides[0].classList.add("invisible");
		slides[1].classList.add("invisible");
		slides[2].classList.remove("invisible");
	};
});