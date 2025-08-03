// Task # 01 & 02
let studentName = [];

// Task # 03 (String Array)
let city = ["Karachi", "Lahore", "islamabad", "Rawalpindi", "Multan"];

// Task # 04 (Number Array)
let number = [34, 54, 7, 1, 45];

// Task # 05 (Boolean Array)
let flag = [true, false];

// Task # 06 (Mixed Array)
let mixedArr = ["karachi", "Mihammad Usama", 1997, true];

// Task # 07 
let edu = ["SSC", "HSC", "BCS", "BS", "B.com", "MS", "M.Phil", "Phd"]
document.writeln(`<h1>Qualification</h1>
    <ol>
        <li>${edu[0]}</li>
        <li>${edu[1]}</li>
        <li>${edu[2]}</li>
        <li>${edu[3]}</li>
        <li>${edu[4]}</li>
        <li>${edu[5]}</li>
        <li>${edu[6]}</li>
        <li>${edu[7]}</li>
    </ol>`);

// Task # 08 
let student = ["Michel", "Jhon", "Tone"];
let score = [320, 230, 480];
let totalScore = 500;
document.writeln(`<h4>Score of ${student[0]} is ${score[0]}.Percentage ${score[0] / totalScore * 100}%</h4>
    <h4>Score of ${student[1]} is ${score[1]}.Percentage ${score[1] / totalScore * 100}%</h4>
    <h4>Score of ${student[2]} is ${score[2]}.Percentage ${score[2] / totalScore * 100}%</h4>`);

// Task # 09 
document.writeln("<h1>Array Element Adding & Removing</h1><br><br>");
var color = ['yellow', 'white', 'black'];
document.writeln(`<b>Array:</b> [${color}]<br>`);
// console.log(color);

var addBeginning = prompt("what color you want to add to the beginner array element : ");
color.unshift(addBeginning);
document.writeln(`<b>Add color in the Beginner:</b>[${color}]<br>`);
// console.log(color);

var addEnd = prompt("what color you want to add at the end : ");
color.push(addEnd);
document.writeln(`<b>Add color in the End : </b>[${color}]<br>`);
// console.log(color);

var addMoreBeginning1 = prompt("Add two more color in the beginner \nEnter first color :");
var addMoreBeginning2 = prompt("Enter second color :  ");
color.unshift(addMoreBeginning1, addMoreBeginning2);
document.writeln(`<b>Add More color in the Beginner:</b>[${color}]<br>`);
// console.log(color);

color.shift();
document.writeln(`<b>First color deleted successfully:</b>[${color}]<br>`);
// console.log(color);

color.pop();
document.writeln(`<b>Last color deleted successfully : </b>[${color}]<br>`);
// console.log(color);

var indexNum = +prompt("Which index you want to add a color : ");
var randomColor = prompt("Enter Color Name ");
color.splice(indexNum, 0, randomColor);
document.writeln(`<b>You add ${randomColor} color on Index ${indexNum} : </b>[${color}]<br>`);
// console.log(color);

var delIndexNum1 = +prompt("Which start index you want to delete : ");
var delIndexNum2 = +prompt("How many index you want to delete : ");
color.splice(delIndexNum1, delIndexNum2);
document.writeln(`<b>You deleted Index ${delIndexNum1} from index ${delIndexNum1} ${delIndexNum2}: </b>[${color}]<br>`);
// console.log(color);

// Task # 10
let student_num = [320, 230, 480, 120];
document.writeln(`<b>Score Of Students:</b> ${student_num}<br>`);
let sortedArr = student_num.sort();
document.writeln(`<b>Ordered Store Of Students:</b> ${sortedArr}<br>`);

// Task # 11
let cityArr = ["Karachi", "Lahore", "Islamabad", "Queta", "Peshawer"];
let selectedCities = cityArr.slice(2, 4);

document.writeln(`<b>Cities List:</b> ${cityArr}<br>
    <b>Selected Cities List:</b>${selectedCities}<br>`);

// Task # 12
var arr = ["This", "is", "my", "cat"];
var joinArr = arr.join(" ");
document.writeln(`Array : ${arr} "<br>" "Array Into String : ${joinArr}<br>`);

// Task # 13
var task13Arr = ["keyboard", "mouse", "printer", "monitor"];
document.writeln(`[${task13Arr}]<br>`);
task13Arr.shift();
document.writeln(`[${task13Arr}]<br>`);
task13Arr.shift();
document.writeln(`[${task13Arr}]<br>`);
task13Arr.shift();
document.writeln(`[${task13Arr}]<br>`);
task13Arr.shift();
document.writeln(`[${task13Arr}]<br>`);

// Task # 14
var task14Arr = ["keyboard", "mouse", "printer", "monitor"];
document.writeln(`[${task14Arr}]<br>`);
task14Arr.pop();
document.writeln(`[${task14Arr}]<br>`);
task14Arr.pop();
document.writeln(`[${task14Arr}]<br>`);
task14Arr.pop();
document.writeln(`[${task14Arr}]<br>`);
task14Arr.pop();
document.writeln(`[${task14Arr}]<br>`);

// Task # 15
let mobileArr = ["Apple", "Sumsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<b>Available Mobile : </b> " + "<select name = 'mobile' >" +
    "<option value='apple' > " + mobileArr[0] + "</option>" +
    "<option value='apple' > " + mobileArr[1] + "</option>" +
    "<option value='apple' > " + mobileArr[2] + "</option>" +
    "<option value='apple' > " + mobileArr[3] + "</option>" +
    "<option value='apple' > " + mobileArr[4] + "</option>" +
    "<option value='apple' > " + mobileArr[5] + "</option>" +
    "</select>"
);