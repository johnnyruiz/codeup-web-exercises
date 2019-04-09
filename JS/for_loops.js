"use strict";

(function () {
var b = 1;
function showMultiplicationTable(a){
    do {
        console.log(a + " x " + b + " = " + (a * b));
        b++
    } while (b <= 10)
}

console.log(showMultiplicationTable(7))

})();