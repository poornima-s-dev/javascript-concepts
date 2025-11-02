// Variable Hoisting
console.log(x);
var x = 10;

console.log(y);
let y = 20;

console.log(z);
const z = 30;

//Function Hoisting
// 1. Function Declaration
add()
function add() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

// 2. Function Expression
sum();
let sum = function () {
    let x = 67;
    let y = 2;
    console.log(x + y);
}

// 3. Arrow Function
addition()
const addition = () => {
    let num1 = 67;
    let num2= 78;
    console.log(num1 + num2);
}

