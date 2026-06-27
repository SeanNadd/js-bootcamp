let name = "Sean";

console.log(name.length); // Output: 4

name.toUpperCase(); // Converts the string to uppercase
console.log(name); // Output: SEAN

name.toLowerCase(); // Converts the string to lowercase
console.log(name); // Output: sean

console.log(name.includes("ea")); // Output: true


let isValidPassword = function(password) {
    return password.length >= 8 && !password.includes("password");
};

console.log(isValidPassword("abc123")); // Output: false
console.log(isValidPassword("abc123!@#")); // Output: true 
console.log(isValidPassword("password123")); // Output: false
