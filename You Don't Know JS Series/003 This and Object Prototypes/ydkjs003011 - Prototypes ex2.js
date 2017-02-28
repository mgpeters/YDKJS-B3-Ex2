// This is the second example in the Prototypes section (Chapter 5).
// The below illustrates if the default [[Get]] operation proceeds to follow the
// [[Prototype]] link of the object if it cannot find the requested property on the object directly.
// We have now added a for..in loop to iterate over the Object

var anotherObject = {
    x:2
};

// The below creats an object linked to 'anotherObject'
var thisObject = Object.create(anotherObject);

for (var x in thisObject) {
    console.log("found: " + x); // output: "found: x"
}


("x" in thisObject); // should be True