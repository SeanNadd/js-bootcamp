const todos = 
    ["Rent apartment Brussels", 
     "Clean the house", 
     "Update CV", 
     "Buy groceries", 
     "Call mom"];


console.log(todos);


console.log(`Removed: ${todos.splice(2, 1)}`); // Removed: Update CV
todos.push("Go to the gym");
console.log(`Added : ${todos[todos.length - 1]}`); // Last todo: Go to the gym
console.log(`Removed: ${todos.shift()}`); // Removed: Rent apartment Brussels



console.log("Resulting todos:", todos); 