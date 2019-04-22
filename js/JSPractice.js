"use strict";

//for loop to traverse a collection not necessarily front to back
//for each for start to finish.

var letters = ['a', 'b', 'c'];

letters.forEach(function(letter, index) {
    letters[index] += 1;
    console.log(letters);
});

for (var i = 0; i < letters.length; i += 1) {
    console.log(letters[i]);
}

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];
//takes in 2 arrays and creates an array with objects with break type and fillings.
function makeSandwichObjects(breads, fillings) {
    var output = [];
    for(var i = 0; i < breads.length; i += 1) {
        output.push({
            bread: breads[i],
            fillings: fillings[i]
        });
    }
    return output;
}

console.log(makeSandwichObjects(breads, fillings));

//function that takes in an array of mixed data types and returns an array of mixed data types

var prob1 = ["fred", true, 5, 3];

function filterNeumbers(arr){
    var output = [];
    for(var i = 0; i < arr.length; i += 1){
        if(typeof arr[i] === "number") {
            output.push(arr[i]);
        }
    }
    output.sort();

    return output;
}

console.log(filterNeumbers(prob1));
var dogs = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
];



function getOlder(arr){
    arr.forEach(function(dogs){
        dogs.age += 1;
    });
}
console.log(dogs);
getOlder(dogs);
console.log(dogs);