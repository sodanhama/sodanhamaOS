setInterval(updateTime, 1000);

function updateTime() {var currentTime = new Date().toLocaleString();
var timeText = document.querySelector('#time');
timeText.textContent = currentTime;}

dragElement(document.getElementById("welcome"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  if (document.getElementById(element.id + "header")) {
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = moveElement;
  }

  function moveElement(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;}}

var window = document.querySelector('#window');

function closeWindow(element) {
    element.style.display = 'none';
    
}

function openWindow(element) {
  element.style.display = "block"
  element.style.position="absolute"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener('click', function() {
    closeWindow(welcome);
});

welcomeScreenOpen.addEventListener('click', function() {
    openWindow(welcome);
}); 