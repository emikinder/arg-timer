// DOM element references
const elements = {
    day: document.getElementById("day"),
    hour: document.getElementById("hour"),
    minute: document.getElementById("minute"),
    second: document.getElementById("second"),
    timer: document.getElementById("timer"),
    completed: document.getElementById("completed"),
    fernet: document.querySelector(".fernet"),
    hielos: document.querySelector(".hielos"),
    espuma: document.querySelector(".espuma"),
};

// time constants
const time = {
    second: 1000,
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
};

const eventDay = new Date("01/13/2024");

const countDown = () => {
    const now = new Date();
    const timeSpan = eventDay - now;

    if (timeSpan <= 0) {
        clearInterval(interval);
        elements.timer.classList.add("hidden");
        elements.completed.classList.remove("hidden");
        return;
    }

    const days = Math.floor(timeSpan / time.day);
    const hours = Math.floor((timeSpan % time.day) / time.hour);
    const minutes = Math.floor((timeSpan % time.hour) / time.minute);
    const seconds = Math.floor((timeSpan % time.minute) / time.second);

    const padNumber = (num) => (num < 10 ? `0${num}` : num);

    elements.day.innerHTML = padNumber(days);
    elements.hour.innerHTML = padNumber(hours);
    elements.minute.innerHTML = padNumber(minutes);
    elements.second.innerHTML = padNumber(seconds);
};

const interval = setInterval(countDown, time.second);

// Fernet
const updateFernet = () => {
    const now = new Date();
    const timeSpan = eventDay - now;
    const daysLeft = Math.floor(timeSpan / time.day);

    elements.fernet.style.height =
        daysLeft >= 0 ? `${(60 - daysLeft) * 6.66}px` : "400px";
    if (daysLeft < 35) elements.hielos.style.position = "relative";
    if (daysLeft < 20) elements.hielos.classList.toggle("rotated");
    if (daysLeft > 56) elements.espuma.classList.toggle("hidden");
};

updateFernet();