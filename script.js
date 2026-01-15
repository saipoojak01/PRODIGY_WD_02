let timer = null;
let isRunning = false;
let seconds = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent =
    String(hrs).padStart(2, "0") + ":" +
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateDisplay();
});
