// JavaScript comparison operators
// === strict equal to
// !== strict not equal to
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

let x = 10;
let y = 5;

console.log("x === y:", x === y);
console.log("x !== y:", x !== y);
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x >= y:", x >= y);
console.log("x <= y:", x <= y);

let temp = 31;
let isFreezing = temp <= 32;


// Challenge area

let age, isChild, isSenior;

age = 65;
console.log("The person's age1 is " + age + ".");

isChild = age <= 7;
isSenior = age >= 65;

console.log("Is the person a child?", isChild);
console.log("Is the person a senior?", isSenior);




/********************************************************/
// Same principle but with if statements instead of ternary operator

temp = 31;

if (temp <= 32) {
    console.log("It is freezing outside!");
}else if (temp >= 110) {
    console.log("It is hot outside!");
}



/********************************************************/
// If statements for age challenge

age = 65;
console.log("The person's age (2) is " + age + ".");

if (age <= 7) {
    console.log("The person is a child.");
}else if (age >= 65) {
    console.log("The person is a senior.");
}else {
    console.log("The person is an adult.");
}   