//Without parameter and without return-type
function squareOfNumber1() {
    let num = 5;
    let square = num * num;
    document.writeln("Type 1 - Square of "+ num +" : "+ square);
}
squareOfNumber1();
document.writeln("<br>");

//With parameter and without return-type
function squareOfNumber2(num) {
    document.writeln("Type 2 - Square of " + num + " : " + num * num);
}
squareOfNumber2(6);
document.writeln("<br>");

//Without parameter and with return-type
function squareOfNumber3() {
    let num = 7;
    let square = num * num;
    return square;
}
let res1 = squareOfNumber3();
document.writeln("Type 3 - Square of 7 : " + res1);
document.writeln("<br>");

//With parameter and with return-type
function squareOfNumber4(num) {
    let square = num * num;
    return square;
}
let res2 = squareOfNumber4(9);
document.writeln("Type 4 - Square of 9 : " + res2);



