let dayField = document.getElementById('day');
let hourField = document.getElementById('hour');
let minuteField = document.getElementById('minute');
let secondField = document.getElementById('second');
let timerField = document.getElementById('timer');
let completedField = document.getElementById('completed');

let interval;
// const eventDay = new Date('10/10/2023');
const eventDay = new Date('01/13/2024');

// Convert to millisecond
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const countDown = () => {
    let now = new Date();
    let timeSpan = eventDay - now;

    if (timeSpan <= 0) {
        clearInterval(interval);
        timerField.classList.add("hidden");
        completedField.classList.remove("hidden");
        return;
    }
    else {
        const days = Math.floor(timeSpan / day)
        const hours = Math.floor((timeSpan % day) / hour)
        const minutes = Math.floor((timeSpan % hour) / minute)
        const seconds = Math.floor((timeSpan % minute) / second)

        // Set results
        dayField.innerHTML = days;
        hourField.innerHTML = hours;
        minuteField.innerHTML = minutes;
        secondField.innerHTML = seconds;
    }
}

everySecond = setInterval(countDown, second)