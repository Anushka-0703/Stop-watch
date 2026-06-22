const resetBtn = document.getElementById("resetButton");
const startBtn = document.getElementById("startButton");
const pauseBtn = document.getElementById("pauseButton");

const miliSecondText = document.getElementById("milisec");
const secondText = document.getElementById("sec");
const minuteText = document.getElementById("min");
const hourText = document.getElementById("hour");

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
pauseBtn.addEventListener("click", pause);

let miliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let interval = null;

function start() {
     //prevent starting a new interval if already running
     if (interval) return;

     interval = setInterval(() => {
          miliSecond++;

          //change Second if millisecond exceed 99
          if (miliSecond === 100) {
               miliSecond = 0;
               second++;
          }

          //change minute if second exceed 59
          if (second === 60) {
               second = 0;
               minute++;
          }

          //change hour if minute exceed 59
          if (minute === 60) {
               minute = 0;
               hour++;
          }

          updateDisplay();
     }, 10);
}

function reset() {
     clearInterval(interval); // stop the interval
     interval = null; //set interval data to null

     //reset all the value to 0
     miliSecond = 0;
     second = 0;
     minute = 0;
     hour = 0;

     updateDisplay();
}

function pause() {
     clearInterval(interval); // stop the interval
     interval = null; //set interval data to null
}

function updateDisplay() {
     miliSecondText.textContent =
          miliSecond < 10 ? "0" + miliSecond : miliSecond;
     secondText.textContent = second < 10 ? "0" + second : second;
     minuteText.textContent = minute < 10 ? "0" + minute : minute;
     hourText.textContent = hour < 10 ? "0" + hour : hour;
}
