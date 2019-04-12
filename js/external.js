"use strict";

console.log("Hello from external Java");

var userName = prompt("Hello what is your name");

alert( "Hello " + userName + ", welcome to my page!");

var favColor = prompt("What's your favorite color?");

alert( "Wow! "+ favColor + " is my favorite color too");

//Solution to 1st word problem
var Hercules = prompt ("Enter the number of days you rented Hercules");
Hercules = Number(Hercules);
var TheLittleMermaid = prompt ("Enter the number of days you rented The Little Mermaid");
TheLittleMermaid = Number(TheLittleMermaid);
var BrotherBear = prompt ("Enter the number of days you rented Brother Bear");
BrotherBear = Number(BrotherBear);
var Total = (Hercules + TheLittleMermaid + BrotherBear)*3;

alert("Your total cost comes out to: $" + Total);

//Solution to 2nd word problem
var Google = 400;
var Amazon = 380;
var Facebook = 350;
var HoursGoogle = prompt("Input hours worked at Google");
HoursGoogle = Number(HoursGoogle);
var HoursAmazon = prompt ("Input hours worked at Amazon");
HoursAmazon = Number(HoursAmazon);
var HoursFacebook = prompt ("Input hours worked at Facebook");
HoursFacebook = Number(HoursFacebook);
var WeekPay = (Google * HoursGoogle) + (Amazon * HoursAmazon) + (Facebook * HoursFacebook);
alert("Total pay for this week is $" + WeekPay);


//Solution to 3rd word problem

function ClassSize() {
    var ClassSize, ClassRoom;
    ClassSize = Number(document.getElementById("ClassSize").value);
    if (isNaN(ClassSize)) {
        ClassRoom = "Input is not a number";
    } else {
        ClassRoom = (ClassSize < 25) ? "Good" : "Class is full!";
    }
    document.getElementById("Size").innerHTML = ClassRoom;
}
function DaysPerWeek() {
    var DaysPerWeek, Days;
    DaysPerWeek = Number(document.getElementById("DaysPerWeek").value);
    if (isNaN(DaysPerWeek)) {
        Days = "Input is not a number";
    } else {
        Days = (DaysPerWeek < 6) ? "Good" : "Too many days";
    }
    document.getElementById("Days").innerHTML = Days;
}
function HoursPerDay() {
    var HoursPerDay, Hours;
    HoursPerDay = Number(document.getElementById("HoursPerDay").value);
    if (isNaN(HoursPerDay)) {
        Hours = "Input is not a number";
    } else {
        Hours = (HoursPerDay < 8) ? "Good" : "Too many hours";
    }
    document.getElementById("Hours").innerHTML = Hours;
}

//Solution to 4th word problem


    var item = prompt("Enter the total number of items purchased");
    item = Number(item);

    var OfferValid = confirm("Is the offer still valid?");

    var PremiumMember = confirm("Are you a Premium member?");

    if (((item>=2) || (PremiumMember = true)) && (OfferValid = true)){
        alert("Offer is valid")
    } else {
        alert("Offer does not apply")
    }





