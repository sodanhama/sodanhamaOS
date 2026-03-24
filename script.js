setInterval(updateTime, 1000);

function updateTime() {var currentTime = new Date().toLocaleString();
var timeText = document.querySelector('#time');
timeText.textContent = currentTime;}
