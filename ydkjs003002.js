function foo(num){
    console.log("foo: " + num);

    // keeps track of how many times "foo" was called
    this.count++;
}

foo.count = 0;

var i;

for (i = 0; i < 10; i++){
    if (i > 5){
        foo(i);
    }
}
console.log(foo.count);