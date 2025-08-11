// // Task # 01
let numInput = +prompt("Enter Number:")
document.writeln(`Number: ${numInput} <br> Round Of Value: ${Math.round(numInput)}<br> Floor Value: ${Math.floor(numInput)}<br> Ceil Value: ${Math.ceil(numInput)}<br>`);

// // Task # 02
let numInput1 = +prompt("Enter Number:")
document.writeln(`Number: ${numInput1} <br> Round Of Value: ${Math.round(numInput1)}}<br> Floor Value: ${Math.floor(numInput1)}<br> Ceil Value: ${Math.ceil(numInput1)}<br>`);

// // Task # 03
let numInput2 = +prompt("Enter Number:")
document.writeln(`The Absolute Value of ${numInput2}  is ${Math.abs(numInput2)}<br>`);

// Task # 04
let random = Math.random() * 6;
document.writeln(`Random Dice Value : ${Math.ceil(random)}`);

// Task # 05
let coin = Math.random() * 2;
if (Math.ceil(coin) === 1) {
    document.writeln(`<br> ${Math.ceil(coin)} <br> Random coin value: Tails`)
} else {
    document.writeln(`<br>${Math.ceil(coin)} <br> Random coin value: Head`)
}

// Task # 06
let generateRandom = Math.ceil(Math.random() * 100);
document.writeln(`<br>Random number between 1 and 100: ${generateRandom}`)


// Task # 07
let userWeight = prompt("Enter Your Weight In Kilograms");
let userWeightArr = userWeight.split("");
let weight = "";
for (let i = 0; i < userWeightArr.length; i++) {
    if (!isNaN(parseInt(userWeightArr[i]))) {
        weight += userWeight[i]
    }
}
document.writeln(`The weight of user is ${weight} kilograms`);


// Task # 10
var ranNum = Math.random() * 10;
var takeNum = +prompt("Guess the number between 1 to 10 : ");

if (Math.ceil(ranNum) === takeNum) {
    alert("Congratulation Your number match with secret number");
} else {
    alert("Try again!");
}