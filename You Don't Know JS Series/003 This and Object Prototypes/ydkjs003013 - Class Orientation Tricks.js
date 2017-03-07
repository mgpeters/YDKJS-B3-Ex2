// This example is found on page 97 of book Three in the YDKJS series. The example
// illustrates two additional "class orientation" tricks.

function Foo(name){
    this.name = name;
}

Foo.prototype.myName = function(){
    return this.name;
};

var a = new Foo("a");
var b = new Foo("b");

a.myName();
b.myName();