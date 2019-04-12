(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};

    person.firstName = "Rick";
    person.lastName = "Sanchez";

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
      return "Hello from " + this.firstName + " " + this.lastName + "!";
    };
    console.log(person.sayHello());
    console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        console.log(shopper.name + ", your total is :$" + shopper.amount);
        if (shopper.amount > 200){
            console.log("You have received a 12% discount bringing your total too :$" + (shopper.amount - (shopper.amount * .12)));
        } else {
            console.log("You do not qualify for a discount today.")
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books =
        [
            {
                title: ["Lord of the Flies", "The Inheritors", "Free Fall", "The Pyramid", "To the Ends of the Earth"] ,
              author: {
                  firstName: "William",
                  lastName: "Golding"
              },
              },
            {
                title: ["The Chamber of Secrets", "The Prisoner of Azkaban", "The Goblet of Fire", "The Half-Blood Prince", "The Deathly Hallows"],
                author: {
                    firstName: "J.K",
                    lastName: "Rowling"
                },
            },
            {
                title: ["A Game of Thrones", "A Clash of Kings", "A Storm of Swords", "A Feast for Crows", "A dance with Dragons"],
                author: {
                    firstName: "George R.R",
                    lastName: "Martin"
                },
            },
        ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(writer){
        console.log("Author : " + writer.author.firstName + " " + writer.author.lastName);
        writer.title.forEach(function(title, i){
            console.log("Book Number " + (i + 1) + " is :" + title);
        });
    });
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var newTitle;
    var newAuthor;
    var addBook = confirm("Would you like to create a new book?");


    function createBook(boolean){
        if(boolean === true) {
            do {
                var newAuthorFirst = prompt("Enter the first name of your new books author");
                var newAuthorLast = prompt("Enter the last name of the new books author");
            } while (typeof (newAuthorFirst || newAuthorLast) !== 'string');
            do {
                var newTitle = prompt("Enter the name of your new book");
            } while (typeof (newTitle) !== 'string');
        } else {
            alert("thank you");
        }
        return {
            title: newTitle,
            author: {
                firstName: newAuthorFirst,
                lastName: newAuthorLast
            }
        }

    }

    books.push(createBook(addBook));

    console.log(books);

    books.forEach(function(writer){
        console.log("Author : " + writer.author.firstName + " " + writer.author.lastName);
        console.log("These are the books we have for the author ");
        console.log(writer.title);
    });
})();
