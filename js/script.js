/* Variables */

const days = document.querySelectorAll(".days");
const hours = document.querySelectorAll(".hours");
const minutes = document.querySelectorAll(".minutes");
const seconds = document.querySelectorAll(".seconds");

/* Handle timer */

/* Seconds */

seconds.forEach((second) => {
  let value = Number(second.textContent);
  setInterval(function () {
    if (value === 0) {
      value = 59;
      second.textContent = value;
    } else {
      value -= 1;
      second.textContent = value;
    }
  }, 1000);
});

/* Minutes */

minutes.forEach((minute) => {
  let value = Number(minute.textContent);
  setInterval(function () {
    if (value === 0) {
      value = 59;
      minute.textContent = value;
    } else {
      value -= 1;
      minute.textContent = value;
    }
  }, 1000 * 60);
});

/* Hours */

hours.forEach((hour) => {
  let value = Number(hour.textContent);
  setInterval(function () {
    if (value === 0) {
      value = 23;
      hour.textContent = value;
    } else {
      value -= 1;
      hour.textContent = value;
    }
  }, 1000 * 3600);
});

/* Days */

days.forEach((day) => {
  let value = Number(day.textContent);
  setInterval(function () {
    if (value === 0) {
      alert("We're launching!");
      return;
    } else {
      value -= 1;
      day.textContent = value;
    }
  }, 1000 * 86400);
});
