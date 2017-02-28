// This is the first example in the Prototypes section (Chapter 5).
// The below illustrates if the default [[Get]] operation proceeds to follow the
// [[Prototype]] link of the object if it cannot find the requested property on the object directly.

var anotherObject = {
    a:2
};

// The below creats an object linked to 'anotherObject'
var thisObject = Object.create(anotherObject);

thisObject.a; // output: 2