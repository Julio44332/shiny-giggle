// 1. Select the HTML elements
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const millisecondsDisplay = document.getElementById('milliseconds');

const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

// 2. Initialize stopwatch variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Function to format time for display (add leading zeros)
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Function to display time
function updateDisplay() {
    const time = new Date(elapsedTime);
    const hours = time.getUTCHours();
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    const milliseconds = time.getUTCMilliseconds();

    hoursDisplay.textContent = formatTime(hours);
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
    millisecondsDisplay.textContent = milliseconds.toString().padStart(3, '0'); // Pad milliseconds to 3 digits
}

// 3. Start button functionality
function startStopwatch() {
    startTime = Date.now() - elapsedTime; // Calculate start time to resume from current elapsed time
    timerInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 10); // Update every 10 milliseconds for smoother milliseconds display

    // Disable Start, Enable Stop/Reset
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
}

// 4. Stop button functionality
function stopStopwatch() {
    clearInterval(timerInterval); // Stop the interval
    // Enable Start, Disable Stop
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

// 5. Reset button functionality
function resetStopwatch() {
    clearInterval(timerInterval); // Stop the interval
    elapsedTime = 0; // Reset elapsed time
    updateDisplay(); // Update display to 00:00:00.000
    // Enable Start, Disable Stop/Reset
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

// 6. Add event listeners to buttons
startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

// Initial state: Stop and Reset buttons disabled
stopBtn.disabled = true;
resetBtn.disabled = true;

// Optional: Console log to confirm script is loaded
console.log("script.js for Stopwatch loaded!");
