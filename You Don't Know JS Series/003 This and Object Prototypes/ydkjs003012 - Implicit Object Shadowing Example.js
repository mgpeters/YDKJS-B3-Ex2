// This example from you You Don't Know JavaScript Book (3 -This and Object Prototypes) shows how Object
// Shadowing can occur implicitly. 

var anotherObject = {
    a:2
};

var myObject = Object.create(anotherObject);

console.log(anotherObject.a); // Output: 2
console.log(myObject.a); // Output: 2

console.log(anotherObject.hasOwnProperty("a")); // Returns "True"
console.log(myObject.hasOwnProperty("a")) // returns "False"

console.log(myObject.a++); // IMPLICIT Shadowing

console.log(anotherObject.a); // Returns 2
console.log(myObject.a); // returns 3

myObject.hasOwnProperty("a"); // returns True

// I added the console.log's so I can see the output in my Javascript console.