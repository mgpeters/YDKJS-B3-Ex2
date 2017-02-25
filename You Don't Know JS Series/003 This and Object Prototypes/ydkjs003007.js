var strPrimitive = "I am a string";
typeof strPrimitive;
strPrimitive instanceof String;

var strObject = new String("I am a string");
typeof strObject;
strObject instanceof String;

Object.prototype.toString.call(strObject);

// Start of new example.

var thisObject = {
    get a(){
        return 2;
    }
};

Object.defineProperty(
    thisObject, // target
    "b",        // property Name
    {           // Discriptor
        get: function(){ return this.a * 2 }, //define getter for "b"
        enumerable: true
    }
);

console.log(thisObject.a);
console.log(thisObject.b);

// Start of new example YDKJS003 pg58

var ourObject = {};

Object.defineProperty(
    ourObject,
    "a",
    {enumerable: true, value: 2}
);

Object.defineProperty(
    ourObject,
    "b",
    // make "b" nonenumberable
    {enumerable: false, value: 4}
);

ourObject.propertyIsEnumerable("a");
ourObject.propertyIsEnumerable("b");

Object.keys(ourObject);
Object.getOwnPropertyNames(ourObject);


// Start of new example YDKJS003 pg60

var myArray = [1, 2, 3];
var it = myArray[Symbol.iterator]();

it.next();
it.next();
it.next();
it.next();
it.next();