function myFunction1() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo1").innerHTML = "You selected: " + x;
}

//=============================================================================

function myFunction2() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("demo2").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}

//=============================================================================

function addBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = +num1 + +num2;
}

function subtractBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

//=============================================================================

var cars1 = ["Ford", "Lexus", "Jeep", "Dodge", "Honda"];
var text = "";
for (i = 0; i < cars1.length; i++) {
    text += cars1[i] + "<br>";
}
document.getElementById("loop1").innerHTML = text;

var cars2 = ["Ford", "Lexus", "Jeep", "Dodge", "Honda"];
var i = 2;
var len = cars2.length;
var text = "";

for (; i < len; i++) {
    text += cars2[i] + "<br>";
}

document.getElementById("loop2").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "10 > " + i + "<br>";
}
document.getElementById("loopBreak").innerHTML = text;

//=============================================================================


if (new Date().getHours() < 18) {
    document.getElementById("ifElse1").innerHTML = "Good day!";
}
else {
    document.getElementById("ifElse1").innerHTML = "Good night!";
}

var time = new Date().getHours();
if (time < 12) {
    greeting = "Good morning!";
} else if (time < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
document.getElementById("ifElse2").innerHTML = greeting;

//=============================================================================

var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("todayIs").innerHTML = "Today is " + day;

var text;
switch (new Date().getDay()) {
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.getElementById("defaultDay").innerHTML = text;

var text;
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = "Soon it is Weekend";
        break;
    case 0:
    case 6:
        text = "It is Weekend";
        break;
    default:
        text = "Looking forward to the Weekend";
}
document.getElementById("commonDay").innerHTML = text;

//=============================================================================

function mathRandomBtn() {
    document.getElementById("mathRandom").innerHTML = Math.floor(Math.random() * 10) + 1;
}

//=============================================================================

function booleanBtn() {
    document.getElementById("booleanEX").innerHTML = Boolean(10 > 9);
}

//=============================================================================

// Create an object:
var person = {
    firstName: "Zach",
    lastName: "Guns",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("thisKeywordEx").innerHTML = person.fullName();

//=============================================================================

myScopeFunction();

function myScopeFunction() {
    var carName = "Volvo";
    document.getElementById("scope1").innerHTML = typeof carName + " " + carName;
}
document.getElementById("scope2").innerHTML = typeof carName;

//=============================================================================

try {
    adddlert("Welcome guest!");
}
catch (err) {
    document.getElementById("errorsEx").innerHTML = err.message;
}


function myErrorsFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("errorsEx2").value;
    try {
        if (x == "") throw "empty";
        if (isNaN(x)) throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}

//=============================================================================

var obj;
obj = document.getElementById("performanceEx");
obj.innerHTML = " Hello world!";

//=============================================================================

var x = 0;
document.getElementById("mistakesEx").innerHTML = Boolean(x == 10);

//=============================================================================

var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
var x = person.fullName.apply(person1);
document.getElementById("funcApplyEx").innerHTML = x;

//=============================================================================

var person = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "John",
    lastName: "Doe"
}
var person2 = {
    firstName: "Mary",
    lastName: "Doe"
}
var x = person.fullName.call(person1);
document.getElementById("funcCallEx").innerHTML = x; 