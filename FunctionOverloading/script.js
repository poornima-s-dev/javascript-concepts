function example() {
    console.log(3 * 2);
}

function example(a, b) {
    console.log(a * b);
}

function example(a, b, c) {
    console.log(a * b * c);
}

example();
example(5, 4);
example(3, 7, 2);

// Function Overloading using Arguements
function add() {
    if (arguments.length === 2) {
        return arguments[0] + arguments[1];
    } else if (arguments.length === 3) {
        return arguments[0] + arguments[1] + arguments[2];
    } else if (arguments.length === 4) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    } else {
        return "Invalid Arguements";
    }
}
console.log(add());
console.log(add(7, 9));
console.log(add(2, 3, 6));
console.log(add(7, 2, 0, 4));

// Function Overloading using Spread Function or Rest Function
function product(...numbers) {
    let result = 1;
    for (let num of numbers) {
        result = result * num;
    }
    return result;
}

console.log(product());
console.log(product(1,2));
console.log(product(1,2,3));
console.log(product(1,2,3,4));