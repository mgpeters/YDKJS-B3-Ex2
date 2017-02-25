
function foo(){
    console.log(this.a);
}

var obj = {
    a: 2,
    foo: foo
};

obj.foo();

// New example is below

    function foo(){
        console.log(this.a);
    }

    obj = {
        a: 65,
        foo: foo
    }

    var bar = obj.foo; // Function reference alias!

    var a = "oops, global";

    bar(); // oops, global

// New example below

    function foo(){
        console.log(this.a);
    }

    var obj = {
        a: 2
    };
foo.call(obj);

// New Example is below

function foo(){
    console.log(this.a);
}

var obj = {
    a: 56
};

var bar = function(){
    foo.call(obj);
};

bar();
setTimeout(bar, 100);

bar.call();

// Last example

    function foo(something){
        console.log(this.a, something);
        return this.a +something;
    }
    var obj = {
        a: 56
    }
    var bar = function (r){
        return foo.apply(obj, r);
    };

    var b = bar(3);
    console.log(b);
