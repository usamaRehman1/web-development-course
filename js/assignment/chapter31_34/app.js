// Date Method

// Task 01
let date = new Date();
document.writeln(date)

// Task 02
let monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"]
let currMonth = date.getMonth();
document.writeln(`<br> <h3> Current Month: ${monthsArr[currMonth]}</h3>`);

// Task 03
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = date.getDay();
alert(`Today is ${days[day]}`)

// Task 04
let displayMessage = (days[day] == "Sun" || days[day] == "Sat") ? "It's Fun Day " : "";
if (displayMessage) {
    alert(displayMessage)
}

// Task 05
let currDate = date.getDate();
if (currDate < 16) {
    alert("First fifteen days Of the month")
} else {
    alert("last days Of the month")
}

// Task 06
let nowMilliSecond = date.getTime();
let nowMinutes = nowMilliSecond / (1000 * 60 * 60)
document.writeln(`<br> Current Date: ${date} <br> 
    Elapsed Milliseconds Since January 1, 1970 : ${nowMilliSecond} <br>
    Elapsed Minutes Since January 1, 1970 : ${nowMinutes} <br>`)

// Task 07
let hr = date.getHours();
(hr < 12) ? alert(" It's AM") : alert(" It's PM");


// Task 08
let letterDate = new Date("Dec, 31, 2020");
document.writeln(letterDate)

// Task 09
let past1stRamadan = new Date("June, 18, 2015");
let pastMilliSeconds = past1stRamadan.getTime();
let currMilliSeconds = date.getTime()
let diffMilliSeconds = currMilliSeconds - pastMilliSeconds;
let daysGap = diffMilliSeconds / (1000 * 60 * 60 * 24)
document.writeln(`<br> ${Math.floor(daysGap)} days have passed since 1st Ramadan, 2015 <br>`)


// Task 10
let beginning2015 = new Date("Jan, 1, 2015");
let referenceSec = date.getTime() / 1000;
let beginningSec = beginning2015.getTime() / 1000;
let diffSec = referenceSec - beginningSec;
document.writeln(`<br> On Reference Date: ${date} <br> ${Math.floor(diffSec)} Seconds had passed since beginning of 2015 <br>`)


// Task 11
document.writeln(`<br> Current Date: ${date} <br>`)
let oneHourseBefore = date.getHours() - 1;
let updateHourse = date.setHours(oneHourseBefore)
document.writeln(`<br> 1 Hour ago:It was ${date} <br>`)

// Task 12 
document.writeln(`<br> Current Date: ${date} <br>`)
let before100Years = date.getFullYear() - 100;
date.setFullYear(before100Years);
document.writeln(`<br> 100 years back: It was ${date} <br>`)


// Task 13
let ageInYears = 28;
let birthYear = new Date().getFullYear() - ageInYears;
document.writeln(`Your Age is : ${ageInYears} <br> Your birth Year is : ${birthYear}`);


//Task 14
let userName = prompt("Enter Name : ");
let unit = +prompt("how many unit use this month : ")
let getMonth = new Date().getMonth();

let netAmount = unit * 16;
let grossAmount = netAmount + 350;

document.writeln(`<br> <h2> K-Electric Bill</h2><br>
    Customer Name: ${userName} <br>
    Month: ${monthsArr[getMonth]} <br>
    Number Of Unit: ${unit} <br>
    Charge Per Unit: 16 <br>
    Net Amount Payablem (within Due Date): ${netAmount} <br>
    Late Payment Charges: 350 <br>
    Gross Amount Payable (After Due Date): ${grossAmount}
    `);