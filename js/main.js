let minutes = 00;
let seconds = 00;
let tens = 00;
let appendMinutes = document.querySelector('#minutes');
let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');
let startButton = document.querySelector('#start-button');
let stopButton = document.querySelector('#stop-button');
let resetButton = document.querySelector('#reset-button');
let interval;

startButton.addEventListener('click', () => {

    clearInterval(interval);
    interval = setInterval(startTimer, 10);

});

stopButton.addEventListener('click', () => {

    clearInterval(interval);

});

resetButton.addEventListener('click', () => {

    minutes = '00';
    seconds = '00';
    tens = '00';
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;

});

function startTimer() {

    tens++;

    if (tens < 9) {
        appendTens.innerHTML = `0${tens}`;
    }
    if (tens > 9) {
        appendTens.innerHTML = tens;
    }
    if (tens > 99){
        seconds++;
        appendSeconds.innerHTML = `0${seconds}`;
        tens = 0;
        appendTens.innerHTML = `0${tens}`;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }
    if (seconds > 59) {
        minutes++;
        appendMinutes.innerHTML = `0${minutes}`;
        seconds = 0;
        appendSeconds.innerHTML = `0${seconds}`;
        tens = 0;
        appendTens.innerHTML = `0${tens}`;
    }

}