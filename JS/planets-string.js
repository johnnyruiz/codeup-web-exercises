(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsArray);

    /**estAaA
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    //string with line breaks
    var planetsBr = planetsArray.join("<br>");

    console.log(planetsBr);

    //string into list
    var planetsList = "<li>" + planetsArray.join("</li> <li>" ) + "</li>";

    console.log(planetsList);


    //Bonus Bonuses

    //alphabet position bonus. takes in the array alphabet and the letter we are looking for
    // and returns the value of the order the letter is in the alphabet
    var alphabet = ["a" ,"b" ,"c" ,"d" ,"e" ,"f" ,"g" ,"h" ,"i" ,"j" ,"k" ,"l" ,"m" ,"n" ,"o" ,"p" ,"q" ,"r" ,"s" ,"t" ,"u" ,"v" ,"w" ,"x" ,"y" ,"z" ];
    function alphabetPosition(arr, element){
        return arr.indexOf(element) + 1;
    }
    console.log(alphabetPosition(alphabet,"x"));

   // var arr1 = ["bob", 1, true, 1, 2];
   // var arr2 = [2, undefined, 0, 2, "apple"];
   // //needs work
   // function isolateNumbers(arr) {
   //     arr.forEach(function (element)){
   //         if (isNaN(+element)){
   //             arr.pop(element);
   //         }
   //     }
   // }
   // function evaluateArray(total, num){
   //     return total + num;
   // }
   // console.log(evaluateArray());
})();
