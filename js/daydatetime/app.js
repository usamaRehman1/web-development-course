// JavaScript program to display current date,day and time
var  day =  document.getElementById("day");
var  date =  document.getElementById("date");
var  time =  document.getElementById("time");
var days = ['Sunday',"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// setInterval() is a built-in JavaScript function that repeatedly calls a specified function at fixed time intervals (in milliseconds).
// setInterval(function, delay) , one second =  thousand milliseconds
const displayDayDateTime = setInterval(()=>{

    let currdate = new Date;
    let hr = currdate.getHours();
    let min = currdate.getMinutes();
    let sec = currdate.getSeconds();

    let dd = currdate.getDate();
    let mm = currdate.getMonth();
    let yr = currdate.getFullYear();

    //check ante meridiem or post meridiem 
    let session = (hr < 12) ? "PM" : "AM";

    //hours convert into 12 hours formate
    hr = (hr >= 12) ? hr - 12 : hr;

    //If number is less then 10 so add zero witth them
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;

    //display the current day, date, and time on a web page
    day.innerHTML = `<h2>Day: ${days[currdate.getDay()]}</h2>`;
    date.innerHTML = `<h2>Date: ${dd} ${months[mm]} ${yr}</h2>`;
    time.innerHTML = `<h2>Time: ${hr}:${min}:${sec} ${session}</h2>`;
},1000)