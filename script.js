var timer=document.getElementById("timer");
var stop=document.getElementById("stop");
var start = document.getElementById("start");
var hours=document.getElementById("hours");
var minutes=document.getElementById("minutes");
var seconds=document.getElementById("seconds");

var hr = 0;
var min = 0;
var sec = 0;

    var clear;
    
start.addEventListener("click",() =>{
     clearInterval(clear);
    clear = setInterval(incrementTime,1000)
})


function incrementTime(){
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec=sec+1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr++;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;}

      timer.innerHTML = hr + ': ' + min + ': ' + sec;

}

stop.addEventListener("click",() =>{
    clearInterval(clear);
})

reset.addEventListener("click", () =>{
    clearInterval(clear);
    hr = 0;
     min = 0;
    sec = 0;
    timer.innerHTML = hr+'0' + ': ' + min + '0'+': ' + sec+'0';
})

