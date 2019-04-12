"use strict";

(function () {

var a = 2;

    while(a <= 65536){
    console.log(a);
    a *= 2;
    }

    var allCones = Math.floor(Math.random() * 50) + 50;

    do{
        allCones -= (Math.floor(Math.random() * 5) + 1);
        console.log(allCones);
    } while (allCones > 1);

})();
