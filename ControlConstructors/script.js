// If Statement A student is eligible for voting if age a 18.
const age = 18;
if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

//If-Else Statement Write a program to check if a number is positive or negative.
const num = -3;
if (num > 0) {
    console.log("Positive Number");
} else{
    console.log("Negative Number");
} 

//If-Else Ladder- Check if a number is positive, negative, or zero.
const x = 0;
if (x > 0) {
    console.log("Positive Number");
} else if (x < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

//Nested If A student passes if marks >= 40. If marks ≥ 88, show "Distinction".
let marks = 64;
if (marks >= 88) {
    console.log("Distinction");
} else if (marks >= 65 && marks <= 87) {
    console.log("Grade A");
} else if (marks >= 40 && marks <= 64) {
    console.log("Grade B")
} else {
    console.log("Fail");
}

//Switch Case 1. Print the grade based on letter (A-Excellent, B=Good, C=Average, D=Poor)
const grade = "C";
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Poor");
        break;
    default:
        console.log("Invalid Grade");
}
//2. print the season based on months in the year (3,4,5 summer) (11,12,1,2 winter) (6,7,8,9,10 Rainy)
const season = 8;
switch (season) {
    case 3:
    case 4:
    case 5:
        console.log("Summer");
        break;
    case 11:
    case 12:
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Spring");
        break;
    case 9:
    case 10:
        console.log("Rainy");
        break;
    default:
        console.log("Invalid Season");
}

// For Loop: Print First 10 Natural Numbers 
for (let i = 1; i <= 10; i++){
    console.log(i);
}

//For Loop: Sum of N Natural Numbers
const n = 75;
let sum = 0;
for (let i = 1; i <= n; i++){
    sum += i;
}
console.log("Sum of " + n + " Natural Numbers: " + sum);

//While Loop: 1 to N Even Numbers
const last = 89;
let i = 1;
while (i <= last) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

//Do while: First 10 Multiples of Five
let j = 1;
let number = 5;
do {
    console.log(number+" * "+j+" = "+number * j);
    j++;
} while (j <= 10);


//For-Of Loop: Print array elements
let fruits = ["apple", "mango", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

//For-Each Loop:
fruits.forEach(x => console.log(x));

//For-in Loop: Objects
let student = { name: "Poorni", age: 23, grade: "A" };
console.log(student);
for (let key in student) {
    console.log(key + ":" + student[key]);
    console.log(key);
    console.log(student[key]);
}

//Break- Jump Control Constructor
for (let i = 1; i <= 10; i++){
    if (i == 3) {
        break;
    }
    console.log(i)
}

//Continue - Jump Control Constructor
for (let i = 1; i <= 10; i++){
    if (i == 3) {
        continue;
    }
    console.log(i)
}