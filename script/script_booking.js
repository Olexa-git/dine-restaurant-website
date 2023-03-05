let number_of_visitors = 4;
const current_date = new Date();
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
	if (booking_name.value.length > 2 && booking_email.validity.valid && booking_month.value.length > 0 && booking_month.validity.valid && booking_day.value.length > 0 && booking_day.validity.valid && booking_year.value >= 2023 && booking_year.validity.valid && booking_hours.value.length > 0 && booking_hours.validity.valid && booking_minutes.value.length != "" && booking_minutes.validity.valid) {
		alert(`Dear ${booking_name.value}, your booking for ${booking_persons_number.innerHTML} was successful! We are waiting for you ${booking_month.value}/${booking_day.value}/${booking_year.value} at ${booking_hours.value}:${booking_minutes.value} ${booking_am_pm.innerHTML} in our restaurant!`);
		reload();
	} else {
		alert('Pleace fill in all fields correctly!');
	}
})
booking_name.addEventListener("change", () => {
	if (booking_name.value.length <= 2) {
		booking_name.style.borderColor = "#9E7F66";
		booking_name.style.color = "#9E7F66";
		booking_name.style.opacity = "0.5";
	} else {
		booking_name.style.borderColor = "#111111";
		booking_name.style.color = "#111111";
		booking_name.style.opacity = "1";
	}
})
booking_email.addEventListener("change", () => {
	valid_style(booking_email)});
booking_month.addEventListener("change", () => {
	valid_style(booking_month)});
booking_day.addEventListener("change", () => {
	valid_style(booking_day)});
booking_year.addEventListener("change", () => {
	valid_style(booking_year)});
booking_hours.addEventListener("change", () => {
	valid_style(booking_hours)});
booking_minutes.addEventListener("change", () => {
	valid_style(booking_minutes)});


booking_day.addEventListener("change", () => {
	minimum_date();
	if (booking_month.value == 2) {
		booking_day.max = 28;
	} else if (booking_month.value == 4 || booking_month.value == 6 || booking_month.value == 9 || booking_month.value == 11) {
		booking_day.max = 30;
	} else {
		booking_day.max = 31;
	}
})
booking_month.addEventListener("change", () => {
	minimum_date();
})
booking_minutes.addEventListener("change", () => {
	if (booking_minutes.value == 0) {
		booking_minutes.value = "00";
	}
})
booking_hours.addEventListener("change", () => {
	if (booking_hours.value < 10) {
		booking_hours.value = "0" + booking_hours.value;
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

function valid_style (field) {
	if (field.validity.valid) {
		field.style.borderColor = "#111111";
		field.style.color = "#111111";
		field.style.opacity = "1";
	} else {
		field.style.borderColor = "#9E7F66";
		field.style.color = "#9E7F66";
		field.style.opacity = "0.5";
	};
};

function minimum_date () {
	if (booking_year.value > current_date.getFullYear()) {
		booking_month.min = 1;
		booking_day.min = 1;
	} else {
		booking_month.min = current_date.getMonth()+1;
		booking_day.min = current_date.getDate();
		booking_year.min = current_date.getFullYear();
	}
};
minimum_date();
