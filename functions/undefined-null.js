// undefined vs null
//
// Both undefined and null represent "no value", but they are used differently.
//
// undefined usually means JavaScript does not have a value yet.
// This happens when a variable is declared but not assigned a value,
// or when a function does not return anything.
//
// null usually means the programmer intentionally set the value to empty.
// It is useful when you want to clearly say "there is no value here right now."
//
// Mental model:
// undefined = JavaScript says "nothing is here yet"
// null = the programmer says "nothing should be here"
//
// Loose equality treats them as similar:
// undefined == null is true
//
// Strict equality treats them as different:
// undefined === null is false
//
// typeof undefined is "undefined"
// typeof null is "object"
// The "object" result for null is an old JavaScript bug kept for compatibility.

let selectedUser = null;

console.log("The value of selectedUser is:", selectedUser); // null
console.log("undefined == null:", undefined == null); // true because they are loosely equal
console.log("undefined === null:", undefined === null); //false because they are different types
console.log("typeof undefined:", typeof undefined); // "undefined" because undefined is its own type
console.log("typeof null:", typeof null); // "object" because null is an old JavaScript bug kept for compatibility


/*******************************************/
let name

console.log("The value of name is:", name);
