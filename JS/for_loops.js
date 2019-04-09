"use strict";

(function () {
var b = 1;
function showMultiplicationTable(a){
    do {
        console.log(a + " x " + b + " = " + (a * b));
        b++
    } while (b <= 10)
}

console.log(showMultiplicationTable(7));

    for(var x = 100; x >= 5; x -= 5){
        console.log(x);
    }

    function isEven(a){
        if (a % 2 === 0){
            console.log(a + " is even")
        } else {
            console.log(a + " is odd")
        } return a;
    }
    for(var z = 1; z <= 10; z++){
        console.log(isEven(Math.floor(Math.random() * 50) + 50));
    }

    for(var j = 1; j < 10; j++){
        console.log(j.toString().repeat(j));
    }

})();