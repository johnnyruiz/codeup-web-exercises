"use strict";

(function () {


    for(var f = 1; f <= 100; f++){
        if ((f % 3 === 0) && (f % 5 === 0)) {
            console.log("Fizz Buzz");
        } else if (f % 3 === 0){
            console.log("fiz");
        } else if (f % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(f)
        }
    }

//////do while loop
//    var i = 1;
//
//    var x = 100;
//
//    do {
//        console.log("The number is: "  +  i);
//        i++;
//    } while (i <= 25);
//
//    do{
//        console.log(x);
//        x -= 10;
//    } while (x >= -50);
//
//var a = 1;
//
//var b = 1;
//
////while a is less than 100 check if a is an even number if so console log then  increment
//while (a <= 100){
//    if (a % 2 === 0){
//        console.log(a)
//    }
//    a++;
//}
//
//
////while b is less than 10 console log b squared then increment
//while (b <= 10){
//    console.log(b * b);
//    b++;
//}

})();