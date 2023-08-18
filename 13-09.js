var x = 1;

function foo() {
    var x = 10;
    bar();
    function bar2() {
        console.log(x);
    }
    bar2();
}

function bar() {
    console.log(x);
}

foo();
bar();