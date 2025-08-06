// Task # 01
var arr = [
    [0, 1, 2, 3]
];

// Task # 02
var multiDimensionArr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for (var i = 0; i < multiDimensionArr.length; i++) {
    document.writeln(multiDimensionArr[i].join(" "), "<br>");
}

// for (let i = 0; i < multiDimensionArr.length; i++) {
//     for (let j = 0; j < multiDimensionArr[i].length; j++) {
//         document.writeln(`<span>${multiDimensionArr[i][j]}</span>`);
//     }
//         document.writeln(`<br>`);
// }

// Task # 03
for (var i = 1; i <= 10; i++) {
    document.writeln(`${i}<br>`);
}

// Task # 04
var tableNum = +prompt("Enter Table Number : ");
var tableLen = +prompt("Enter Table Length : ");
document.writeln(`<div>Multiplication Table Of ${tableNum}<div>
    <div>Length ${tableLen}</div>`);

for (var i = 1; i <= tableLen; i++) {
    document.writeln(`<div>${tableNum} x ${i} = ${tableNum * i} </div>`);
}

// Task # 05
var fruits = ["Apple", "Mango", "Banana", "Orange", "Strawberry"];
document.writeln(`<div>Fruits Array : [${fruits}] <div>`);

for (var i = 0; i < fruits.length; i++) {
    document.write(`<div>Element at index ${i} is ${fruits[i]}</div>`);
}

// Task # 06
// -------------------------counting--------------------------
document.writeln("<span>Counting:</span>");
for (var i = 1; i <= 15; i++) {
    document.writeln(`${i},`)
}

// -------------------------Reverse Counting--------------------------
document.writeln("<br><span>Reverse Counting :</span>");
for (var i = 10; i > 0; i--) {
    document.writeln(`${i},`);
}

// -------------------------Even--------------------------
document.writeln("<br><span>Even : </span>");
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(`${i},`);
    }
}

// -------------------------Odd--------------------------
document.writeln("<br><span>Odd : </span>");
for (var i = 1; i < 20; i++) {
    if (i % 2 === 1) {
        document.writeln(`${i},`);
    }
}

// -------------------------Series--------------------------
document.writeln("<br><span>Series : </span>");
for (var i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(`${i}k,`);
    }
}

// Task # 07
var bakeryArr = ["cake", "apple pie", "cookie", "chips", "patties"];
var getElement = prompt("Welcome to ABC Bakery.What do you want to order sir/mam");
var flag = true;

for (var i = 0; i < bakeryArr.length; i++) {
    if (bakeryArr[i] === getElement) {
        flag = false;
        document.writeln(`${getElement} is available at index ${i} in over Bakery.`);
    }
}

if (flag) {
    document.writeln(`We are sorry. ${getElement} is not available in over Bakery.`);
}

// Task # 08
var numArr = [24, 53, 78, 91, 12];
// var largestNum = 0; 
var largestNum;

// for (let i = 0; i < numArr.length; i++) {
//     if (numArr[i] >= largestNum) {
//         largestNum = numArr[i];
//     }
// }
// console.log(largestNum)

for (let i = 0; i < numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
        if (numArr[i] > numArr[j]) {
            largestNum = numArr[i];
        }
    }
}
document.writeln(`<div>Number Array: [${numArr}]</div>
    <div>Largest Number Of array is ${largestNum}</div>`);

// Task # 09
var smallestNum = 0 ;
for (let i = 0; i <= numArr.length; i++) {
    for (let j = 0; j < numArr.length; j++) {
        if (numArr[j] < numArr[i]) {
            smallestNum = numArr[j];
            numArr[j] = numArr[i];
            numArr[i] = smallestNum;
        }
    }
}
document.writeln(`<div>Number Array: [${numArr}]</div>
    <div>Smallest Number Of array is ${smallestNum}</div>`);

// Task # 10
for (let i = 1; i <= 20 ; i++) {
    document.writeln(`${i*5},`)
}