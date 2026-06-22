// const resetBtn = document.getElementById("resetButton");
// const startBtn = document.getElementById("startButton");
// const pauseBtn = document.getElementById("pauseButton");


// startBtn.addEventListener("click", start);
// resetBtn.addEventListener("click", reset);
// pauseBtn.addEventListener("click", pause);

// let milisecond=0
// let second=0
// let minute=0
// let hour=0


// function start() {
//      interval=setInterval(()=>{
//           console.log("start")
//      },10)
// }


// function reset() {

// }


// function pause() {

// }


// script.js

let [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
let timerRef = document.querySelector('.timer');
let interval = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;
  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  clearInterval(interval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(interval);
  [hours, minutes, seconds, milliseconds] = [0, 0, 0, 0];
  isRunning = false;
  updateDisplay();
}

// Button event listeners
document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

// Initialize display
updateDisplay();
