let add = function(a, b, c) {
    return a + b + c;
};

console.log(add(1, 2, 3)); // Outputs: 6


// Default Parameters
let multiply = function(a = 1, b = 1) {
    return a * b;
};

console.log(multiply(5, 2)); // Outputs: 10
console.log(multiply(5));    // Outputs: 5 (b defaults to 1)
console.log(multiply());     // Outputs: 1 (both a and b default to 1)


let getScoreText = function(name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`;
};

console.log(getScoreText('John', 100)); // Outputs: Name: John - Score: 100
console.log(getScoreText());             // Outputs: Name: Anonymous - Score: 0
    


// Challenge: Tip calculator function
let calculateTip = function(total, tipPercent = 0.15) {
    if (tipPercent === 0.25) {
        console.log(`You are tipping ${total * tipPercent}!`);
    }
    return total * tipPercent;
};

console.log("The tip is: $" + calculateTip(100));        // Outputs: 15 (default tip percent of 15%)
console.log("The tip is: $" + calculateTip(100, 0.2));   // Outputs: 20 (20% tip)
console.log("The tip is: $" + calculateTip(40, 0.25));  // Outputs: 25 (25% tip)
