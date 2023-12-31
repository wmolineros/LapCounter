// Countdown Timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;


const COLOR_CODES = {
  info: {
    color: "blue"
  },
  warning: {
    color: "yellow",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "pink",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.addEventListener("DOMContentLoaded", function() {

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
});

// Form details

let details = document.getElementById("details");

details.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("username"); 
  let meters = document.getElementById("meters");

  if (username.value == "" || meters.value == "") {
    alert("Ensure you input a value in both fields!");
    return false;
  } else {
    window.location.href  = "lap.html";

    }
  });

// Lap Details

function lapMe() {
  var count = document.getElementById('lapVal');
  count.innerHTML++
};


// Values not actualising to be worked on at a later point 

function welcomeDetails() {
  let welcomeBox = document.getElementById('form-box');
  let welcomeMessage = `
    <h2>Welcome to the lap counter ${username}</h2>`;
  
    welcomeBox.innerHTML = welcomeMessage;//Set the welcome message displayed to the user
    welcomeDetails();
};

 
$(".job-form").each(function(index, item) {
  //get values..
  var meters = parseInt($(this).find("[name=rundistance]").val());
  var lap = parseInt($(this).find("[name=lapvalue").val());
  //add total to required input
  $(this).find("[name=result").val(meters * lap)
});