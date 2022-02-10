"use strict";

// Change to false if you don't want a timer
const showTimer = false;

// Set timer countdown time here in minutes : seconds format
const time = 0 + ":" + 19;

// Add list of names here
const namesList = [
	'Rolls-Royce',
	'Mercedes 300',
	'Land Rover 2022',
	'Bentley SUV',
	'Lexus 570',
	'Audi A8',
	'BMW',
	'KIA K5',
	'VINFAST LUX'
	 
];

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');
// const timesUp = document.getElementById('timesUp');
// const timerWrapper = document.getElementById('timerWrapper');
// const timer = document.getElementById('timer');
  const divButton = document.getElementById('button-container');
   const divPhao = document.getElementById('phao');
 

document.addEventListener("DOMContentLoaded", function(event) {
    if(localStorage.getItem('popState') == 'shown'){  
       headerNames.textContent = "Bạn đã nhận được phần quà " + localStorage.getItem('iQua'); 
	   divButton.style.display = "none";
	   divPhao.innerHTML = '<div class="before"></div><div class="after"></div>';
	    
    } 
}); 

// Optional countdown timer
// Add zero in front of numbers < 10
// function checkSecond(sec) {
//   if (sec < 10 && sec >= 0) {
// 		sec = "0" + sec;
// 	} 
//   if (sec < 0) {
// 		sec = "59";
// 	}
//   return sec;
// }

// const startTimer = function() {
//   const presentTime = timer.innerHTML;
//   const timeArray = presentTime.split(/[:]+/);
//   let m = timeArray[0];
//   let s = checkSecond((timeArray[1] - 1));
	
//   if (s==59) {
// 		m = m-1;
// 	}
//   if (m < 0) {
// 		timesUp.style.display = "block";
// 	}
  
//   timer.innerHTML = m + ":" + s;
	
// 	setTimeout(startTimer, 1000);
// }

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = "none";
    stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
        headerNames.textContent = namesList[i++ % namesList.length];
    }, 50);
	// if (showTimer===true) {
	// 	timerWrapper.classList.remove('visible');
	// }
});
stopButton.addEventListener('click', function() {
	this.style.display = "none";
    startButton.style.display = "block";
	clearInterval(intervalHandle);
	namesList.splice(namesList.indexOf(headerNames.textContent), 1)
	console.log(namesList, headerNames.textContent)
	 
	if (showTimer===true) {
		timerWrapper.classList.add('visible');
	} 
	localStorage.setItem('iQua', headerNames.textContent);
	localStorage.setItem('popState', 'shown');
	 divButton.style.display = "none";
	 divPhao.innerHTML = '<div class="before"></div><div class="after"></div>';
	
});

// Allow use of spacebar to start/stop name shuffle
document.body.onkeyup = function(e) {
	if (e.keyCode == 32) {
		if (x%2===0) {
			startButton.style.display = "none";
            stopButton.style.display = "block";
			intervalHandle = setInterval(function () {
                headerNames.textContent = namesList[i++ % namesList.length];
			}, 50);
			if (showTimer===true) {
				timerWrapper.classList.remove('visible');
			}
		} else {
			startButton.style.display = "block";
			stopButton.style.display = "none";
            clearInterval(intervalHandle);
			timer.innerHTML = time;
			if (showTimer===true) {
				timerWrapper.classList.add('visible');
			}
			startTimer();
		}
		x++; 
	}
} 

// Blinking warning
// var backgroundInterval = setInterval(function() {
//   timesUp.classList.toggle("backgroundRed");
// }, 1000)