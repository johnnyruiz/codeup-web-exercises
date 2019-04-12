(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (obj) {
            obj = 3.14 * (obj.radius * obj.radius) ;
            // TODO: complete this method
            // hint: area = pi * radius^2

            return {
                area : obj
            };// TODO: return the proper value
        },

        logInfo: function (doRounding) {

            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };
    console.log();

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
