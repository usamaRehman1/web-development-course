var num1 = 2, num2 = 3;
document.writeln(`Sum of ${num1} and ${num2} is ${num1+num2}<br>`);
document.writeln(`Subtraction of ${num1} and ${num2} is ${num1-num2}<br>
    Multiplication of ${num1} and ${num2} is ${num1*num2}<br>
    Division of ${num1} and ${num2} is ${num1/num2}<br>`);

var num ;
document.writeln(`Value after variable decleration is ${typeof num}<br>`)
num = 8;
document.writeln(`Initial value:${num}<br>`);
num += 1;
document.writeln(`value after Increment:${num}<br>`);
num += 7;
document.writeln(`Value after addition is:${num}<br>`);
num -= 1;
document.writeln(`Value after Decrement is:${num}<br>`);
num %= 3;
document.writeln(`The Reminder is:${num}<br>`);

var ticketPrice = 600;
var numOfTicket = 5;
document.writeln(`Total cost to buy ${numOfTicket} tickets to a movie is ${ticketPrice*numOfTicket}PKR<br>`);

var tableNum = 4;
document.writeln(`<br> <h2>Table Of ${tableNum}</h2><br>
    ${tableNum}x1=${tableNum*1}<br>
    ${tableNum}x2=${tableNum*2}<br>
    ${tableNum}x3=${tableNum*3}<br>
    ${tableNum}x4=${tableNum*4}<br>
    ${tableNum}x5=${tableNum*5}<br>
    ${tableNum}x6=${tableNum*6}<br>
    ${tableNum}x7=${tableNum*7}<br>
    ${tableNum}x8=${tableNum*8}<br>
    ${tableNum}x9=${tableNum*9}<br>
    ${tableNum}x10=${tableNum*10}<br>`);

var tempInCelsius = 25;
//temperature convert into fahrenheit
var tempConvertInFahrenheit = ((tempInCelsius*9)/5) + 32;
document.writeln(`${tempInCelsius}<sup>o</sup>C is ${tempConvertInFahrenheit}<sup>o</sup>F<br>`)

var tempInFahrenheit = 70;
//temperature convert into celsius
var tempConvertInCelsius = (tempInFahrenheit-32) * 5/9;
document.writeln(`${tempInFahrenheit}<sup>o</sup>F is ${tempConvertInCelsius}<sup>o</sup>C<br>`)


var item1Price = 650, item2Price = 100;
var item1Quantity = 3, item2Quantity = 7;
var shippingCharges = 100; 
document.writeln(`<h3>Shopping Cart</h3><br>
    Price of item 1 is ${item1Price}<br>
    Quantity of item 1 is ${item1Quantity}<br>
    Price of item 2 is ${item2Price}<br>
    Quantity of item 2 is ${item2Quantity}<br>
    Shipping Charges ${shippingCharges}<br>
    Total cost of your order is ${(item1Price*item1Quantity) + (item2Price*item2Quantity) + 100}<br>`);

var totalMarks = 980;
var marksObtain = 804;
document.writeln(`<br>Total Marks: ${totalMarks}<br>
    Marks Obtain: ${marksObtain} <br>
    Percentage: ${marksObtain/totalMarks *100}%<br>`);

document.writeln(`<br><h3>Courancy in PKR</h3><br>
    Total Courancy in PKR: ${(10*104.80)+ (25*28)}<br>`);

var num3 = 5;
document.writeln(`calculated number is:${(num3+5)*10/2}<br>`);

var currYear = 2025;
var birthYear = 1997;
document.writeln(`<br><h3>Calculate Age</h3><br>
    Current Year is ${currYear}<br>
    Birth Year is ${birthYear}<br>
    Your Age is ${currYear-birthYear}<br>`)


const pi = 3.142; 
var radiusOfCircle = 20;
var circumference = 2*pi*radiusOfCircle;
var area = pi*radiusOfCircle**2;
document.writeln(`<br><h3>The Geometrizer</h3><br>
    Radius of Circule is:${radiusOfCircle}<br>
    Circumference of circule is:${circumference}m<br>
    Area of circule is:${area}m<sup>2</sup><br>`);

var snack = "chocolate chip";
var currAge = 15;
var maxAge = 65;
var amountOfSnack = 3;
var totalSnackOfLife = (maxAge - currAge) * amountOfSnack;
document.writeln(`<br><h3>The Life Time Supply Calculator</h3><br>
    Favourite Snack : ${snack}<br>
    Current Age : ${currAge}<br>
    Estimated Maximum Age : ${maxAge}<br>
    Amount Of Snack Per Day : ${amountOfSnack}<br>
    You wil need ${totalSnackOfLife} ${snack} to last until the ripe old age of ${maxAge}`);