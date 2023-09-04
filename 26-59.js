function sum(x = 0, y = 0) {
    return x + y;
}

console.log(sum(1,2));
console.log(sum(1));

function Name(name = 'Jo') {
    console.log(name);
}

Name();
Name(undefined);
Name(null);
Name('Kim');