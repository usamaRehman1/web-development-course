// Function 

// Task 01
function date() {
    document.writeln(new Date());
}
date();

// Task 02
function userName() {
    var firstName = prompt("Enter First Name : ");
    var lastName = prompt("Enter Last Name : ");
    alert(`Welcome ${firstName} ${lastName}`);
}
userName();

// Task 03
function add() {
    var num1 = +prompt("Enter First Number :");
    var num2 = +prompt("Enter Second Number :");
    var addNum = num1 + num2;
    return addNum;
}
document.writeln(`Addition Of Both Number: ${add()}`);

// Task 04

function calculator(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    }
    else if (operator === '-') {
        return num1 - num2;
    }
    else if (operator === '*') {
        return num1 * num2;
    }
    else if (operator === '/') {
        return num1 / num2;
    }
    else if (operator === '%') {
        return num1 % num2;
    } else {
        return "Please enter correct sing."
    }
}
var num1 = +prompt("Enter First Number : ");
var num2 = +prompt("Enter Second Number : ");
var operator = prompt("Enter Sing (+,-,/,%): ");
document.writeln(`<br><h1>Calculator </h1> <br> Result ${num1} ${operator} ${num2} = ${calculator(num1, num2, operator)}`)

// Task 05
function square(num) {
    return num ** 2;
}
let sqNum = +prompt("Enter number: ")
alert(`square of ${sqNum}: ${square(sqNum)}`);

// Task 06
function factorial(num) {
    if (num < 0) {
        return "Please Enter a positive number"
    } else if (num === 1) {
        return 1
    } else if (num > 1) {
        let temp = 1;
        for (let i = num; i > 0; i--) {
            temp *= i
        }
        return temp
    } else {
        return "Please Enter a valid input"
    }
}
let facoralNum = +prompt("Enter Number:");
alert(`Factoral of ${facoralNum} is ${factorial(facoralNum)}`);

// Task 07
function counting(startNum, endnum) {
    for (let i = startNum; i <= endnum; i++) {
        document.writeln(`${i}<br>`)
    }
}
counting(5, 20)

// Task 08
function calculateHypotenuse() {
    var base = +prompt("Enter Base :");
    var per = +prompt("Enter perpandicular :");
    var hyp = base ** 2 + per ** 2;
    calculateSquare(hyp);

    function calculateSquare(hyp) {
        document.writeln(`Hypotenuse of right triangle : ${hyp ** (1 / 2)}`);
    }
}
calculateHypotenuse();

// Task 09
function calculateArea(width, height) {
    let area = width * height;
    document.writeln(`Area Of Triangle : ${area}`);
}
let height = 5;
calculateArea(4, height);

// Task 10
function palindrome() {
    let palindromeWord = prompt("Enter Palindrome Word: ");
    let checkPalindrome = '';

    for (let i = palindromeWord.length - 1; i >= 0; i--) {
        checkPalindrome += palindromeWord[i]
    }

    if (palindromeWord.toLowerCase() == checkPalindrome.toLowerCase()) {
        console.log(`${palindromeWord} is palindrome word`)
    } else {
        console.log(`${palindromeWord} is not palindrome word`)
    }

}
palindrome()

// Task 11

function capitalize(str) {

    let splitStrArr = str.split(" ")
    let strCapatilize = "";
    for (let i = 0; i < splitStrArr.length; i++) {
        strCapatilize += `${splitStrArr[i].slice(0, 1).toUpperCase()}${splitStrArr[i].slice(1)} `
    }

    return strCapatilize;
}

let str = prompt("Enter String i will convert into capitalize:");
alert(`Capatilize String : ${capitalize(str)}`)
