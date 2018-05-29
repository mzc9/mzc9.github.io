//function to return a 2-digit zero-padded rendering of a number less than 100
var zeroPad = function(num) {
  return (num < 10 ? '0' : '') + num;
}

var minutes = 59;
var seconds = 59;

//this function gets called every second to adjust the countdown readout on the timer button
var adjustTimer = function() {
    document.getElementById("timer").innerHTML = zeroPad(minutes) + ":" + zeroPad(seconds);       
         
    if (seconds-- == 0) {
        minutes--;
        seconds = 59;
        if (minutes == 0) {
            minutes = 59;
        }
    }
}

//start up the timer when the page loads
window.onload = function() { 
     setInterval(adjustTimer, 1000);
}

