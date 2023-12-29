let timer;
let timeInSeconds = 60;
let initialTime = 1; 

function updateTimerDisplay() {
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = timeInSeconds % 60;

  const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timer').innerText = formattedTime;
}

function startTimer() {
  const selectedMinutes = parseInt(document.getElementById('minutes').value, 10);
  initialTime = selectedMinutes * 60;
  timeInSeconds = initialTime;
  updateTimerDisplay();

  timer = setInterval(() => {
    if (timeInSeconds > 0) {
      timeInSeconds--;
      updateTimerDisplay();
    } else {
      stopTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  timeInSeconds = initialTime;
  updateTimerDisplay();
}

updateTimerDisplay();
