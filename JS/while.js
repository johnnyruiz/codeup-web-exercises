"use strict";

(function () {

var a = 1;

    while(a <= 100){
    console.log(a * a);
    a++;
    }

    var allCones = Math.floor(Math.random() * 50) + 50;

    do{
        allCones -= (Math.floor(Math.random() * 5) + 1);
        console.log(allCones);
    } while (allCones > 1);

})();
