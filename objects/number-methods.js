let num = 103.941;
console.log(num.toFixed(2)); // Output: 103.94

console.log(Math.round(num)); // Output: 104
console.log(Math.floor(num)); // Output: 103
console.log(Math.ceil(num)); // Output: 104

let min = 10;
let max = 20;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // Generates a random number between min and max (inclusive)
console.log(randomNum); // Output: A random number between 10 and 20 

let guess = 4;

let randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1; // Generates a random number between 1 and 5 (inclusive)
console.log(randomNumber == guess); // Output: A random number between 1 and 5