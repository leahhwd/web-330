"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Leah Harris
      Date: 03/22/24

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

//Constructor function for timer object
function timer(min, sec){
  this.minutes = min;
  this.seconds = sec;
  this.timeID = null;
}

//add the runPause() method
timer.prototype.runPause = function(timer, minBox, secBox){
  //if else statement to test values
  if (timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
      timer.timeID = window.setInterval(function(){
        countdown(timer, minBox, secBox);
      //running every 1000 milliseconds
    }, 1000);
  }

//countdown function- I attempted to use console.log messages to find the issue
//I think the problem is possibly with the countdown function, but I'm not sure why
  function countdown(timer, minBox, secBox) {
    if (timer.seconds > 0) {
      timer.seconds -= 1;
    } else if (timer.minutes > 0){
      timer.minutes -= 1;
      timer.seconds = 59;
    } else {
      window.clearInterval(timer.timeID);
      timer.timeID = null;
    }

    timer.minutes = minBox.value;
    timer.seconds = secBox.value;
  }
};


/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
//new timer object
let myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = function(){
  myTimer.minutes = minBox.value;
}

secBox.onchange = function(){
  myTimer.seconds = secBox.value;
}
//On click event handler to apply the runPause method
runPauseTimer.onclick = function(){
  myTimer.runPause(myTimer, minBox, secBox);
}

