jfunction foo(a,b){
    console.log("a: " + a + " ,b:" + b);
}

// our DMZ empty object 

var ø = Object.create(null);

// spreadingout array as parameters

foo.apply(ø, [2, 3]);

// currying with 'bind(..)

var bar = foo.bind(ø, 2);

bar(3);

//

function poo(){
    console.log("name: " + this.name);
}

var obj = {name: "obj"},
    obj2 = {name: "obj2"},
    obj3 = {name: "obj3"};

var pooOBJ = poo.softBind(obj);

pooOBJ();

obj2.poo = poo.softBind(obj);
obj2.poo();

pooOBJ.call(obj3);

setTimeout(obj2.poo, 100);

//

var myThing = {};

myThing[true] = "foo";
myThing[3] = "bar";
myThing[myThing] = "baz";

myThing["true"];
myThing["3"];
myThing["[object Object]"];