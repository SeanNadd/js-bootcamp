// Scope representation
//
// Global scope
//     Block scope 1
//         Nested block scope
//
// Global scope
//     Block scope 2
//         let message

// Variable shadowing
//
// Shadowing happens when an inner scope declares a variable with the same
// name as a variable in an outer scope.
// Inside the inner scope, JavaScript uses the inner variable first.
// The outer variable still exists, but it is temporarily hidden.

let name = "Andrew";

if(true){
    let name = "Sean";
    if(true){
        console.log(name); // This will log "Sean" because the inner block shadows the outer variable.
    }
}  

if(true){
    console.log(name); // This will log "Andrew" because the shadowing only applies within the inner block.
}


/************************/

// Leaked variables
//
// If you assign a value to a variable name without declaring it first
// with let, const, or var, JavaScript may create a leaked global variable.
// This is usually a mistake because the variable becomes available outside
// of the block where it was first assigned.
//
// In the example below, name2 is not declared because both let statements
// are commented out. When name2 = "Patrick" runs, it creates name2 outside
// of the inner block. That is why the later console.log can still print
// "Patrick".
//
// In strict mode, this would cause an error instead of leaking the variable.

//let name2 = "Andrew";

if(true){
    //let name2 = "Sean";
    if(true){
        name2 = "Patrick";
        console.log(name2); // This logs "Patrick" because name2 now exists as a leaked variable.
    }
}  

if(true){
    console.log(name2); // This logs "Patrick" because leaked variables are available outside the block.
}
