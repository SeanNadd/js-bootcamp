// JavaScript variable scope
//
// Scope describes where a variable can be accessed in your code.
// A variable is only available inside the scope where it was created,
// plus any inner scopes nested inside it.
//
// Lexical scope:
// JavaScript uses lexical scope, which means scope is based on where
// variables and blocks are written in the code.
// Inner scopes can access variables from outer scopes, but outer scopes
// cannot access variables created inside inner scopes.
//
// Global scope:
// A variable declared outside of blocks and functions is in global scope.
// It can be accessed from anywhere in this file after it has been declared.
//
// Block scope:
// A block is code inside curly braces: { }
// Variables declared with let or const inside a block only exist inside
// that block.
//
// Function scope:
// Variables declared inside a function only exist inside that function.
// This applies to let, const, and var.
//
// var:
// Variables declared with var are function-scoped, not block-scoped.
// Because of this, var can behave in surprising ways inside if statements
// and loops. Modern JavaScript usually prefers let and const.
//
// Shadowing:
// If an inner scope declares a variable with the same name as an outer scope,
// the inner variable temporarily "shadows" the outer one.
//
// General rule:
// Use const when the variable will not be reassigned.
// Use let when the variable will be reassigned.
// Avoid var unless you specifically need older JavaScript behavior.

let var1 = "var1";

if (true) {
    console.log(var1); // Accessible here
}

let outerVariable = "outer";

if (true) {
    let innerVariable = "inner";

    console.log(outerVariable); // Inner scopes can access outer variables.
    console.log(innerVariable); // This variable exists inside this block.
}

// console.log(innerVariable); // Error: outer scopes cannot access inner variables.
