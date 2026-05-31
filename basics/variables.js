// JavaScript variable naming constraints

// 1. Variable names can contain letters, digits, underscores, and dollar signs.
let firstName;
let score2;
let _privateValue;
let $price;

// 2. Variable names cannot start with a digit.
// let 2score;

// 3. Variable names cannot contain spaces or hyphens.
// let first name;
// let first-name;

// 4. Variable names cannot use most special characters.
// let user@email;
// let total%;

// 5. Variable names cannot be reserved JavaScript keywords.
// let let;
// let class;
// let return;

// 6. Variable names are case-sensitive.
let age;
let Age;

// 7. Variable names should use camelCase by convention.
let studentScore;
let maxScore;
let percentScore;

age = 20;
Age = 21;
studentScore = 5;
maxScore = 10;
percentScore = (studentScore / maxScore) * 100;

console.log("age and Age are different variables:", age, Age);
console.log("The student scored " + percentScore + "%.");

// Use const when a variable should not be reassigned.
// This makes your code clearer and helps prevent accidental changes.
// Use let only when the variable needs to change later.
const passingScore = 70;
