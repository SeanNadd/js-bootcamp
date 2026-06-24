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

// Challenge: Tip calculator function
let calculateTip = function(total, tipPercent = 0.15) {
    return total * tipPercent;
};

console.log("The tip is: $" + calculateTip(100));        // Outputs: 15 (default tip percent of 15%)
console.log("The tip is: $" + calculateTip(100, 0.2));   // Outputs: 20 (20% tip)