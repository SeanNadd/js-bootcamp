// Function parameters and arguments
//
// Parameters are the variable names listed in the function definition.
// Arguments are the actual values passed into the function call.
//
// JavaScript function arguments are always passed by value.
// For primitive values like numbers, strings, and booleans, the value itself
// is copied into the parameter.
// For objects and arrays, the copied value is a reference to the same object
// or array.
//
// This means changing a primitive parameter does not change the original
// variable outside the function.
let originalAge = 30;

let changeAge = function(age){
    age = 40;
};

changeAge(originalAge);
console.log("originalAge:", originalAge);

// With objects, changing a property affects the original object because both
// variables point to the same object.
let user = {
    name: "Sean"
};

let changeName = function(person){
    person.name = "Andrew";
};

changeName(user);
console.log("user.name:", user.name);

// Reassigning the parameter itself does not replace the original object.
let replaceUser = function(person){
    person = {
        name: "Patrick"
    };
};

replaceUser(user);
console.log("user.name after replaceUser:", user.name);

/*****************************************/

let greetUser = function(){
    console.log("Hello, welcome to the JavaScript bootcamp!");
};

let squareNumber = function(num){
    return num * num;
};

greetUser();

let result = squareNumber(5);
console.log("The square of 5 is: " + result);

/*****************************************/
// Challenge Area
// Convert Fahrenheit to Celsius.

let temp1 = 32;
let temp2 = 68; 

let farenheitToCelsius = function(farenheit){
    return (farenheit - 32) * (5 / 9);
};  


console.log(farenheitToCelsius(temp1) + "°C is equal to " + temp1 + "°F.");
console.log(farenheitToCelsius(temp2) + "°C is equal to " + temp2 + "°F.");
