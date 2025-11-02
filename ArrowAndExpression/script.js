//Function Expression
let cube = function (num) {
    return num * num * num;
}
console.log("Function Expression - Cube of 3 : " + cube(3));

//Arrow Function
let square = (num) => num * num;
console.log("Arrow Function - Square of 9 : " + square(9));

let greet = () => console.log("Hello, All");
greet();

let addNumbers = (a, b) => {
   return a + b;
}
console.log("Addition : " + addNumbers(10, 78));

//Area of Rectangle
const calculateArea = (width, height) => width * height;
console.log(calculateArea(10, 76));