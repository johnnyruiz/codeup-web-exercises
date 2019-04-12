(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

var names = ["Jordan","Joshua","Jennifer", "Johnny", "Jake"];

var userName = prompt("What is your name?");

var dogName = prompt ("What is your dog's name?");
//adds the entered name to the beginning of the array
names.push(userName);
//adds the entered name to the end of the array
names.push(dogName);

//below will alphabetize the array..
//alert("alphabetizing the names");
//names.sort();
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
console.log(names[0]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i = 0; i < names.length; i++) {
    console.log("The name at index " + i + " is " + names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name){
        console.log(name);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(a){
        return (a[0]);
    }

    console.log(first(names));

    function second(a){
        return (a[1]);
    }

    console.log(second(names)) ;

    function last(a){
        return (a[(a.length - 1)]);
    }

    console.log(last(names));

})();
