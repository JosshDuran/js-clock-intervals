
var second = document.getElementById('second')
var minute = document.getElementById('minute')
var hour = document.getElementById('hour')

// Defining variables for seconds, minutes and hour
var secondsperminute = 60;
var secondsperhour = 60 * secondsperminute;
var secondsper12hours = 12 * secondsperhour;
var showrealtime = true;

TIME = 0;

document.addEventListener("DOMContentLoaded", function() {
  setInterval(tick);

  startClock();

 function tick() {
 	// increment seconds by one (includes rerendering second hand)
   // check if seconds is > 60
  // seconds = 0
 	if (secondsperminute > 60) {
 		return (secondsperminute + 1)
 	}
 	// minutes increments by one (includes rerendering minute hand)
   // see if minutes === 60
     // minutes = 0
 	if (secondsperhour === 0) {
 		return (secondsperhour + 1)
 	}
 	// increment hour by one (includes rerendering hour hand)
     // if hour > 12 
         // hour = 0 
 	if (secondsper12hours > 12) {
 		return (secondsperhour + 1)
 	}



function startClock() {
  second.style.transform = "rotate(" + degreesSeconds(TIME) + "deg)";
  minute.style.transform = "rotate(" + degreesMinutes(TIME) + "deg)";
  hour.style.transform = "rotate(" + degreesHours(TIME) + "deg)";
}

function degreesSeconds(seconds) {
  var time = seconds / secondsperminute * 360;
}

function degreesMinutes(seconds) {
  var time = seconds / secondsperhour * 360;
}

function degreesHours(seconds) {
  var time = seconds / secondsper12hours * 360;
}