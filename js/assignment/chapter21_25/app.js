// Task # 01
let firstName = prompt("Enter First Name : ");
let lastName = prompt("Enter Last Name : ");
let fullName = firstName + " " + lastName;
alert(`Welcome ${fullName}`);

// Task # 02
let mobile = prompt("Enter your favorite phone with model : ");
let mobileLength = mobile.length;
document.writeln(`My Favorite Phone is: ${mobile}  <br> Length Of String: ${mobileLength}`);

// Task # 03 
let findCharArr = [];
let getChar = prompt("Enter any String:");
for (let i = 0; i < getChar.length; i++) {

    if (getChar[i] == 'n' || getChar[i] == 'N') {
        findCharArr.push(i + 1)
    }
}
document.writeln(`your String is: ${getChar}  <br> 'n' present at index : ${findCharArr.join(",")}`);

// Task # 04
var str = "Hello World ";
document.writeln(`String : ${str} <br> Index Of 'l' is  ${str.lastIndexOf('l')}`);

// Task # 05
var str = "Pakistan";
document.writeln(`<br>String : ${str} <br> Character at index 3 : ${str.charAt(3)}<br>`);


// Task # 06

// Task # 07
let city = "Hydrabad";
let change = city.replace("Hydra", "Islama");
document.writeln(`<br> City : ${city} <br> After Replacement : ${change}<br>`);

// Task # 08
let massage = "Ali and Sami are best friend.They play cricket and footbal together. ";
let replacement = massage.replace(/and/g, "&");
document.writeln(`<br>Massage : ${massage} <br> Repacement & in Massage : ${replacement}<br>`);

// Task # 09
let numStr = "472";
let numNum = Number(numStr);
document.writeln(`<br>Value : ${numStr} <br> Type : ${typeof (numStr)} <br> Value : ${numNum} <br> Type : ${typeof (numNum)} <br>`);

// Task # 10
let userInput = prompt("Enter Somthing: ");
document.writeln(`<br>User Input : ${userInput}  <br> Upper Case : ${userInput.toUpperCase()}<br>`);

// Task # 11
let getInput = prompt("Enter somthing: ");
document.writeln(`<br>User Input : ${getInput}  <br> Title Case : ${getInput.slice(0, 1).toUpperCase()}<br>`);

// Task # 12
let decimalNum = 35.36;
let decimalIntoStr = String(decimalNum);
// console.log(decimalIntoStr, typeof(decimalIntoStr)) 
let removeDecimal = "";

for (let i = 0; i < decimalIntoStr.length; i++) {
    if (decimalIntoStr[i] !== '.') {
        removeDecimal += decimalIntoStr[i]
    }
}
document.writeln(`<br>number : ${decimalNum}  <br> Result : ${Number(removeDecimal)}<br>`);


// Task # 13
let getUserName = prompt("Enter Name:");
let flag = false;
for (let i = 0; i < getUserName.length; i++) {
    if (getUserName[i].charCodeAt() == 33 || getUserName[i].charCodeAt() == 44 || getUserName[i].charCodeAt() == 46 || getUserName[i].charCodeAt() == 64) {
        flag = true;
    }
}
if (flag) {
    alert("please enter a valid username")
} else {
    alert(`your Name is ${getUserName}`)
}

// Task # 14

let bakeryItemsArr = ["cake", "apple pie", "cookies", "chips", "patties"];
var userSearchInput = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
let boolean = true;
let ind;

for (let i = 0; i < bakeryItemsArr.length; i++) {
    if (bakeryItemsArr[i] == userSearchInput.toLowerCase()) {
        boolean = false;
        ind = i;
    }
}

if (boolean) {
    alert(`We are Sorry. ${userSearchInput} is not available in over bakery`);
} else {
    alert(`${userSearchInput} is available at index ${ind} in over bakery`);
}

// Task # 15
let pass = prompt("Enter 6 digit Password : ");
let passRg = /^([a-zA-Z0-9]{6})+$/;
if (isNaN(pass[0])) {
    if (pass.match(passRg)) {
        document.writeln(`<br>Enter Password : ${pass} <br> Bingo!Password is valid<br>`);
    } else {
        document.writeln(`<br>Enter Password : ${pass} <br> Please enter a valid password<br>`);
    }
} else {
    document.writeln(`<br>Enter Password : ${pass} <br> Password can not being with a number<br>`);
}

// Task # 16
let university = "Univercity Of Karachi";
let uniArry = university.split("");
for (let i = 0; i < uniArry.length; i++) {
    document.writeln(`${uniArry[i]}<br>`)
}

// Task # 17
let getUserInput = prompt("Enter Somthing");
let lastInd = getUserInput.charAt(getUserInput.length - 1);
document.writeln(`<br>User Input = ${getUserInput} <br> Last Index = ${lastInd}`);


// Task # 18
let sentance = "the quick brown fox jumps over the lazy dog.";
let check = sentance.split(" ");
let count = 0;

for (let i = 0; i < check.length - 1; i++) {
    if (check[i] === "the") {
        count += 1;
    }
}
document.writeln(`<br>Text :  ${sentance} <br> There are ${count} occurrences of word 'the'.`);