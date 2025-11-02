//Primitive Data types
var x = "Poornima";
var x = 'Poornima';
var x = `P`;
var num = 123;

console.log(x);
console.log(typeof x);

console.log(num);
console.log(typeof num);

var val = true;
console.log(val);
console.log(typeof val);

var d;
console.log(typeof d);

var z = null;
console.log(z);
console.log(typeof z);

//Complex
//function 
function greet() {
    console.log("Good Morning");
}
greet();

//Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[3]);

//Objects 
let person = {
    id: 101,
    name: "Poornima",
    age: 23
};
console.log(person);
console.log(person.name);
console.log(person.age);