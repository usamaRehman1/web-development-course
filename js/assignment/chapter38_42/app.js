// Function || Switch || While || Do While

// Task 01
function power(a, b) {
    let pow = a ** b;
    return pow;
}
console.log(`8 ^ 2 =  ${power(8, 2)}`);

// Task 02 
function checkLeapYear() {
    let year = prompt("Enter Year:");

    // check condition year is leap or not
    switch (year) {
        case "2012":
            return `${year} is a leap year`
        case "2016":
            return `${year} is a leap year`
        case "2020":
            return `${year} is a leap year`
        default:
            return `${year} is not a leap year`
    }
}
console.log(checkLeapYear())


// Task 03
function triangle() {
    let a = +prompt("Enter Triangle width in m : ");
    let b = +prompt("Enter Triangle length in m : ");
    let c = +prompt("Enter Triangle height in m: ");

    return `${areaTriangle(a, b, c)}meter squire`
}

function areaTriangle(a, b, c) {
    var s = (a + b + c) / 2;
    var area = s * (s - a) * (s - b) * (s - c);

    return area;
}
console.log(`Area Of Triangle is: ${triangle()}`)

// Task 04
function mainFunction() {
    let sub1 = +prompt("Every Subject contain 100 marks \nEnter Subject Number 1 :");
    let sub2 = +prompt("Enter Subject Number 2 :");
    let sub3 = +prompt("Enter Subject Number 3 :");

    alert(`Percentage:  ${percentage(sub1, sub2, sub3)}%`);
    alert(`Average: ${average(sub1, sub2, sub3)}`);
}

function percentage(sub1, sub2, sub3) {
    let total = sub1 + sub2 + sub3;
    let per = (total / 300) * 100;
    let perSetDecimal = per.toFixed(2);
    return perSetDecimal;
}

function average(sub1, sub2, sub3) {
    let total = sub1 + sub2 + sub3;
    let avg = total / 3;
    let avgSetDecimal = avg.toFixed(2);
    return avgSetDecimal;
}
mainFunction();

// Task 05

function checkIndexOf(str) {
    let char = prompt(` String : ${str} \nWhich character will you find index ?:`)
    let strSplit = str.split("");
    let indexNum, repChar = "", flag = false;

    for (let i = 0; i < strSplit.length; i++) {
        if (strSplit[i] == char) {
            repChar += i
            indexNum = i
            flag = true
        }
    }

    if (flag) {
        if (repChar.length > 1) {
            for (let j = 0; j < repChar.length; j++) {
                console.log(`${char} At ${repChar[i]} Index`)
            }
        } else {
            console.log(`${char} At ${indexNum} Index`)
        }
    } else {
        console.log(`${char} is not in the ${str}`)
    }
    return indexNum;
}
checkIndexOf('development')