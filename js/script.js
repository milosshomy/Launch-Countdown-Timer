/* Variables */

const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");
/* Handle timer */

/* Seconds */

function handleSeconds(sec) {
  let value = Number(sec.textContent);
  setInterval(() => {
    if (value === 0) {
      value = 59;
      sec.textContent = value;
    } else {
      value -= 1;
      sec.textContent = value;
    }
  }, 1000);
}

seconds.forEach((second) => handleSeconds(second));

/* Minutes */

function handleMinutes(min) {
  let value = Number(min.textContent);
  setInterval(() => {
    if (value === 0) {
      value = 59;
      min.textContent = value;
    } else {
      value -= 1;
      min.textContent = value;
    }
  }, 1000 * 60);
}

minutes.forEach((minute) => handleMinutes(minute));

/* Hours */

function handleHours(hour) {
  let value = Number(hour.textContent);
  setInterval(() => {
    if (value === 0) {
      value = 23;
      hour.textContent = value;
    } else {
      value -= 1;
      hour.textContent = value;
    }
  }, 1000 * 3600);
}

hours.forEach((hour) => handleHours(hour));

/* Days */

function handleDays(day) {
  let value = Number(day.textContent);
  setInterval(() => {
    if (value === 0) {
      alert("We're launching!");
    } else {
      value -= 1;
      day.textContent = value;
    }
  }, 1000 * 86400);
}

days.forEach((day) => handleDays(day));
