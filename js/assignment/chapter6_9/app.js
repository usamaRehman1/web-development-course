//Math Expression

var a = 10;
document.writeln(`Result:<br>
    The value of a is ${a}<br>
    -------------------------<br>
    The value of ++a is ${++a}<br>
    Now the value of a is ${a}<br>
    The value of a++ is ${a++}<br>
    Now the value of a is ${a}<br>
    The value of --a is ${--a}<br>
    Now the value of a is ${a}<br>
    The value of a-- is ${a--}<br>
    Noe the value of a is ${a}<br>`);

var a = 2, b = 1;
document.writeln(`a is ${a} <br> b is ${b}<br>`);
var result = --a - --b + ++b + b--;
document.writeln(`Result is ${result}<br>`);

var userName = prompt("Enter Your Name :");
alert(`Welcome ${userName}`);

var tableNum = prompt("Enter Table Number:");
var checkNum = (tableNum == '') ? 5 : tableNum;
document.writeln(`<br> <h2>Table Of ${tableNum}</h2><br>
    ${checkNum}x1=${checkNum * 1}<br>
    ${checkNum}x2=${checkNum * 2}<br>
    ${checkNum}x3=${checkNum * 3}<br>
    ${checkNum}x4=${checkNum * 4}<br>
    ${checkNum}x5=${checkNum * 5}<br>
    ${checkNum}x6=${checkNum * 6}<br>
    ${checkNum}x7=${checkNum * 7}<br>
    ${checkNum}x8=${checkNum * 8}<br>
    ${checkNum}x9=${checkNum * 9}<br>
    ${checkNum}x10=${checkNum * 10}<br>`);

var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");
var totalMarks = 100;
var subject1Marks = prompt("Enter first subject Marks:");
var subject2Marks = prompt("Enter second subject Marks:");
var subject3Marks = prompt("Enter third subject Marks:");

document.writeln(`<table>
    <tr>
    <th>Subject</th>
    <th>TYotal Marks</th>
    <th>Obtained Marks</th>
    <th>Percentage</th>
    </tr>
    <tr>
    <td>${subject1}</td>
    <td>${totalMarks}</td>
    <td>${subject1Marks}</td>
    <td>${subject1Marks / totalMarks * 100}%</td>
    </tr>
    <tr>
    <td>${subject2}</td>
    <td>${totalMarks}</td>
    <td>${subject2Marks}</td>
    <td>${subject2Marks / totalMarks * 100}%</td>
    </tr>
    <tr>
    <td>${subject3}</td>
    <td>${totalMarks}</td>
    <td>${subject3Marks}</td>
    <td>${subject3Marks / totalMarks * 100}%</td>
    </tr>
    <tr>
    <td></td>
    <td>${totalMarks + totalMarks + totalMarks}</td>
    <td>${subject1Marks + subject2Marks + subject3Marks}</td>
    <td>${((subject1Marks/totalMarks*100)+(subject2Marks / totalMarks * 100)+(subject3Marks / totalMarks * 100))/3}%</td>
    </tr>
    </table>`);