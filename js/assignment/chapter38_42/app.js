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

// Task 06
function delVowel(sen){
    var senArr = sen.split("");
    var i = 0 ;

    while(i < senArr.length){

        switch(senArr[i]){
            case "a" :
                senArr.splice(i,1)
                break;
            case "e" :
                senArr.splice(i,1)
                break;
            case "i" :
                senArr.splice(i,1)
                break;
            case "o" :
                senArr.splice(i,1)
                break;
            case "u" :
                senArr.splice(i,1)
                break;            
        }

        i++;
    }
    let joinSen = senArr.join("");
    return joinSen
}
console.log(`After removing vowel in the sentence : ${delVowel("The quick brown fox jump over the lazy dog")}`);

// Task 07
function checkTwoVowel(sen) {

    let splitSen = sen.split("");
    console.log(splitSen)
    let towVowelArr = [];
    let i = 0

    while (i < splitSen.length) {
        // console.log("Check Vowel =>", splitSen[i] + splitSen[i + 1])

        switch (splitSen[i] + splitSen[i + 1]) {
            case 'ae':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ea':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ai':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ia':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ao':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'oa':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'au':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ua':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ei':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ie':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'eo':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'oe':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'eu':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ue':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'io':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'oi':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'iu':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ui':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'ou':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
            case 'uo':
                towVowelArr.push(splitSen[i] + splitSen[i + 1])
                break;
        }
        i++;
    }
    let joinTwoVowelArr = towVowelArr.join(",");
    return joinTwoVowelArr
}
console.log(`Two vowel combine => ${checkTwoVowel("Please read this application and give me gratuity")}`)

// Task 08
// Distance convert kilometer into meter 1km = 1000m
function distanceMeter(d) {
    var meter = d * 1000;
    return meter;
}

// Distance convert kilometer into feet 1km = (1000*0.35)ft
function distanceFeet(d) {
    var feet = (d * 1000) * 0.35;
    return feet;
}

// Distance convert kilometer into inch 1km = (1000*39.37)inch
function distanceInche(d) {
    var inche = (d * 1000) * 39.37;
    return inche;
}

// Distance convert kilometer into centimeter 1km = (1000*100)cm
function distanceCentimeter(d) {
    var centimeter = (d * 1000) * 100;
    return centimeter;
}

var distance = +prompt("Enter Distance in km : ");
document.writeln(`Distance in meter : ${distanceMeter(distance)}m<br>
Distance in Feet : ${distanceFeet(distance)}ft<br>
Distance in Inche : ${distanceInche(distance)}inche<br>
Distance in Centimeter : ${distanceCentimeter(distance)}cm`); 

// Task 09
function overTimePay(hr) {

    return (hr > 40) ? (hr-40) * 12 : 0;
}
let hr = +prompt("How many hours you work this month :");
console.log(`Over time of this month is: ${overTimePay(hr)}Rs`)

// Task 10
function cashierChange(payment) {
    let thoushand = 0, hundred = 0, fifty = 0, ten = 0;
    let check = 0;

    let i = 0;
    while (i <= payment) {
        check += 1

        if (check == 10) {
            ten += 1
            check = 0
            if (ten == 5) {
                fifty += 1
                ten = 0
                if (fifty == 2) {
                    hundred += 1;
                    fifty = 0
                    if (hundred == 10) {
                        thoushand += 1
                        hundred = 0
                    }
                }
            }
        }
        i++;
    }
    return `You will have ${thoushand} thousand notes ${hundred} Hundred notes ${fifty} Fifty notes ${ten} Ten notes`
}
let payment = +prompt("Enter amount to withdraw:")
console.log(cashierChange(payment))