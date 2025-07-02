// USER INPUT & CONDITIONAL STATEMENT

var city = prompt("Enter Your City Name: ");
if (city == 'karachi') {
    alert("Welcome to city of light");
} else {
    alert(`Your city is ${city}`);
}

var gender = prompt("Enter You gender:");
if (gender.toLowerCase() == "male") {
    alert("Welcome Sir");
} else if (gender.toLowerCase() == "female") {
    alert("Welcome Ma'am");
}

//Trafic signal color
var color = prompt("Enter Trafic signal color: ").toLowerCase();
if (color == "red") {
    alert("Must Stop");
} else if (color == "yellow") {
    alert("Ready To Move");
} else if (color == "green") {
    alert("Move Now")
} else {
    alert("Enter somthing");
}

var fule = prompt("How much fule remaining in you car:");
if (fule < 0.25) {
    alert("Please refill the fule in your car.")
}

var a = 4;
if (++a === 5) {
    alert("Given condition of a variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for varible b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The Cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}
if ("car" < "cart") {
    alert("car is smaller than cat");
}

var obtainMarks = prompt("Enter Marks Obtained in three Subjects:");
var totalMarks = prompt("Enter Total Marks Of Three Subjects:")
var percentage = obtainMarks / totalMarks * 100;
// console.log(percentage)
var grade, remarks;
if (percentage > 80 || percentage == 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if ((percentage > 70 || percentage == 70) && percentage < 80) {
    grade = "A";
    remarks = "Good";
} else if ((percentage > 60 || percentage == 60) && percentage < 70) {
    grade = "B";
    remarks = "You need to improve";
} else if (percentage < 60) {
    grade = "Fail";
    remarks = "sorry";
}
document.writeln(`<h2>Marks Sheet</h2><br>
    Total Marks:${totalMarks}<br>
    Obtained Marks:${obtainMarks}<br>
    Percentage:${percentage}%<br>
    Grade: ${grade}<br>
    Rermarks:${remarks}`);

// Guess Number
var num = 8;
var userGuessNum = prompt("Guess Number:");
if (userGuessNum == num) {
    alert("Bingo! Correct Answer")
} else if (userGuessNum == ++num) {
    alert("Close enough to the correct answer");
}

// Divisible Number
if (userGuessNum % 3 == 0) {
    alert("The Number is divisible by 3")
}

//even and odd
var reminder = userGuessNum % 2;
// console.log(reminder)
if (reminder == 0) {
    alert("The Given number is even");
} else {
    alert("The given number is odd");
}

//Temperature condition
var temperature = prompt("Enter Temperature:");
if (temperature > 40) {
    alert("It`s Too Hot Outside");
} else if (temperature > 30 && temperature < 40) {
    alert("The Weather Today is Normal");
} else if (temperature > 20 && temperature < 30) {
    alert("Todays Weather is Cool");
} else if (temperature > 10 && temperature < 20) {
    alert("OMG! Today`s Weather is So Cool");
}

// calculator
var firstNum = prompt("CALCULATOR \n Enter First Number :");
var secondNum = prompt("Enter second Number");
var operator = prompt("Enter Operator (+,-,*,/,%):");
if (operator == '+') {
    alert(`${firstNum} + ${secondNum} = ${firstNum + secondNum}`);
} else if (operator == '-') {
    alert(`${firstNum} - ${secondNum} = ${firstNum - secondNum}`);
} else if (operator == '*') {
    alert(`${firstNum} * ${secondNum} = ${firstNum * secondNum}`);
} else if (operator == '/') {
    alert(`${firstNum} / ${secondNum} = ${firstNum / secondNum}`);
} else if (operator == '%') {
    alert(`${firstNum} % ${secondNum} = ${firstNum % secondNum}`);
}