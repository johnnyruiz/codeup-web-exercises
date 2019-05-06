"use strict";

    // const myPromise = new Promise((resolve, reject) => {
    //    if (Math.random() > 0.5) {
    //        resolve();
    //    } else {
    //        reject();
    //    }
    // });
    //
    // myPromise.then(() => {
    //     console.log('resolved');
    // }).catch(() => {
    //     console.log('rejected')
    // });


    const wait = (num) => {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(typeof(num) == "number"){
                    resolve();
                } else {
                    reject();
                }
            }, (1000 * num));
        }).then(() => {
            console.log('You\'ll see this after ' + num + ' seconds');
        }).catch(() => {
            console.log( num + ' is not a number')
        });
    };
//Test
    wait(3);
    wait(5);
    wait(7);
    wait('banana');
    wait(false);
    wait(true);







// exp of basic promise creation

    // let goodKid = true;
    //
    // const getCake = new Promise((res, rej) => {
    //     if (goodKid){
    //         res('You get Cake!');
    //     } else {
    //         rej('You don\'t get cake, bad child');
    //     }
    // });
    //
    // getCake.then((data) => {
    //     console.log(data);
    // }).catch((data) => {
    //     console.log(data)
    // });