// Task # 01

let char = prompt("Enter Alphabet Letter: ");
// convert Alphabet to ASCII code 
// code: A=65, Z=90 , a=97, z=122
//.charCodeAt(0) ------ This is a string method in JavaScript that returns the Unicode (ASCII) value 
// of the character at the specified index, which in this case is 0 (the first character).
let str = char.charCodeAt(0); // store the result (str)
if (str >= 65 && str <= 90) {
    console.log(char + " is a Capittal letter");
} else if (str >= 97 && str <= 122) {
    console.log(char + " is a Small letter");
} else {
    console.log("Input in not valid");
}

//Task # 02
let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");

if (num1 == num2) {
    console.log(`${num1} is equal to number ${num2}`);

} else if (num1 > num2) {
    console.log(`${num1} is grater then ${num2}`);
} else if (num2 > num1) {
    console.log(`${num2} is grater then ${num1}`);
}

//Task # 03
let num = +prompt("Enter Number : ");

if (num === 0) {
    alert("Your Number is Zero");
}
else if (num > 0) {
    alert("You enter positive integer")
}
else if (num < 0) {
    alert("You enter negative integer")
} else {
    alert("input is not valid");
}

// Task # 04
let charCheckVovel = prompt("Enter Alphabet Letter: ");
var flag = false;

if (charCheckVovel == 'a' || charCheckVovel == 'e' || charCheckVovel == 'i' || charCheckVovel == 'o' || charCheckVovel == 'u') {
    flag = true;
}
else if (charCheckVovel == 'A' || charCheckVovel == 'E' || charCheckVovel == 'I' || charCheckVovel == 'O' || charCheckVovel == 'U') {
    flag = true;
} else {
    // alert("Input in not valid")
}

if (flag) {
    alert(charCheckVovel + " is a vowel ");
} else {
    alert(charCheckVovel + " is not a vowel");
}

// Task # 05
let pass = "12345678";
let getPass = prompt("Enter Password :e.g. 12345678 ");

if (pass === getPass) {
    alert("Correct!The Password you entered matches the original password.");
}
else if (getPass === '') {
    alert("please enter Password");
}
else {
    alert("Incorrect Password");
}

//Task # 06
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// Task # 07
var time = +prompt("Enter time in 24 hours formte :");
// console.log(time * 120)

if (time >= 0 && time < 1200) {
    alert("Good Morning");
}
else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}
else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}
else if (time >= 2100 && time < 2359) {
    alert("Good Night");
}
else {
    alert("Input is not valid");
}