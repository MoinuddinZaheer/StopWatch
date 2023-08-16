const display = document.querySelector('.display');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let interval;

function updateDisplay() {
    const currentTime = new Date().getTime() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);

    display.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.addEventListener('click', () => {
    if (!startTime) {
        startTime = new Date().getTime();
        interval = setInterval(updateDisplay, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(interval);
    startTime = undefined;
});

resetButton.addEventListener('click', () => {
    clearInterval(interval);
    startTime = undefined;
    display.textContent = '00:00:00';
});
