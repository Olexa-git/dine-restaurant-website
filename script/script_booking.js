let number_of_visitors = 4;
const reservarion_btn = document.getElementById("reservarion_btn");
const booking_name = document.getElementById("booking_name");
const name_required = document.getElementById("name_required");
const booking_email = document.getElementById("booking_email");
const email_required = document.getElementById("email_required");
const booking_month = document.getElementById("booking_month");
const booking_day = document.getElementById("booking_day");
const booking_year = document.getElementById("booking_year");
const date_required = document.getElementById("date_required");
const booking_hours = document.getElementById("booking_hours");
const booking_minutes = document.getElementById("booking_minutes");
const time_required = document.getElementById("time_required");
const pick_date_sign = document.getElementById("pick_date_sign");
const pick_time_sign = document.getElementById("pick_time_sign");
const arrow_am_pm = document.getElementById("arrow_am_pm");
const am_pm_box = document.getElementById("am_pm_box");
const booking_am_pm = document.getElementById("booking_am_pm");
const pm = document.getElementById("pm");
const am = document.getElementById("am");
const booking_persons_number = document.getElementById("booking_persons_number");
const persons_inc = document.getElementById("persons_inc");
const persons_dec = document.getElementById("persons_dec");



reservarion_btn.addEventListener("click", (evt) => {
	evt.preventDefault();
	if (booking_name.value.length <= 2) {
		name_required.classList.remove("invisible");
	} else {
		name_required.classList.add("invisible");
	}
	if (booking_email.validity.valid == false || booking_email.value.length == 0) {
		email_required.classList.remove("invisible");
	} else {
		email_required.classList.add("invisible");
	}
	if (booking_month.value.length == 0 || booking_month.validity.valid == false || booking_day.value.length == 0 || booking_day.validity.valid == false || booking_year.value.length == 0 || booking_year.validity.valid == false) {
		date_required.classList.remove("invisible");
		pick_date_sign.style.color = "#B54949";
	} else {
		date_required.classList.add("invisible");
		pick_date_sign.style.color = "#111111";
	}
	if (booking_hours.value.length == 0 || booking_hours.validity.valid == false || booking_minutes.value.length == "" || booking_minutes.validity.valid == false) {
		time_required.classList.remove("invisible");
		pick_time_sign.style.color = "#B54949";
	} else {
		time_required.classList.add("invisible");
		pick_time_sign.style.color = "#111111";
	}
	if (booking_name.value.length < 3 && booking_email.validity.valid && booking_month.value.length > 0 && booking_month.validity.valid && booking_day.value.length > 0 && booking_day.validity.valid && booking_year.value.length >= 2023 && booking_year.validity.valid && booking_hours.value.length > 0 && booking_hours.validity.valid && booking_minutes.value.length != "" && booking_minutes.validity.valid) {
		alert('Pleace fill in all field correctly!');
	} else {
		alert("Booked");
	}
})
booking_day.addEventListener("input", () => {
	if (booking_month.value == 2) {
		booking_day.max = 28;
	} else if (booking_month.value == 4 || booking_month.value == 6 || booking_month.value == 9 || booking_month.value == 11) {
		booking_day.max = 30;
	} else {
		booking_day.max = 31;
	}
})
arrow_am_pm.addEventListener("click", () => {
	am_pm_box.classList.toggle("invisible");
	arrow_am_pm.classList.toggle("rotate");
})
pm.addEventListener("click", () => {
	if (pm.querySelector('img').classList == "invisible") {
		pm.querySelector('img').classList.remove("invisible");
		am.querySelector('img').classList.add("invisible");
		booking_am_pm.innerHTML = "PM";
		am_pm_box.classList.add("invisible");
		arrow_am_pm.classList.remove("rotate");
	} else {
		am_pm_box.classList.add("invisible");
		arrow_am_pm.classList.remove("rotate");
	}
});
am.addEventListener("click", () => {
	if (am.querySelector('img').classList == "invisible") {
		am.querySelector('img').classList.remove("invisible");
		pm.querySelector('img').classList.add("invisible");
		booking_am_pm.innerHTML = "AM";
		am_pm_box.classList.add("invisible");
		arrow_am_pm.classList.remove("rotate");
	} else {
		am_pm_box.classList.add("invisible");
		arrow_am_pm.classList.remove("rotate");
	}
});
persons_inc.addEventListener("click", () => {
	if (number_of_visitors < 30) {
		number_of_visitors++;
		booking_persons_number.innerHTML = `${number_of_visitors} people`
	}
});
persons_dec.addEventListener("click", () => {
	if (number_of_visitors > 4) {
		number_of_visitors--;
		booking_persons_number.innerHTML = `${number_of_visitors} people`
	}
});
