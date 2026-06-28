const todos =
    [{ title: "Todo 1", body: "Rent apartment Brussels", completed: false },
    { title: "Todo 2", body: "Clean the house", completed: true },
    { title: "Todo 3", body: "Update CV", completed: false },
    { title: "Todo 4", body: "Buy groceries", completed: true },
    { title: "Todo 5", body: "Call mom", completed: false }];


console.log(todos);


console.log(`Removed: ${todos.splice(2, 1).title}`); // Removed: Update CV
todos.push({ title: "Todo 6", body: "Go to the gym", completed: false });
console.log(`Added : ${todos[todos.length - 1].title}`); // Last todo: Go to the gym
console.log(`Removed: ${todos.shift().title}`); // Removed: Rent apartment Brussels


console.log("Returning only compelted todos");

const completedTodos = todos.filter((todo) => todo.completed);
console.log(completedTodos);

console.log("Resulting todos:");
todos.forEach((todo, index) => console.log(`${index + 1}. ${todo.title}: ${todo.body}`));

console.log("Same stuff but with a for loop");
for (let i = 0; i < todos.length; i++) {
    console.log(`${i + 1}. ${todos[i].title}: ${todos[i].body}`);
};


const removeTodo = ((name) => {
    todos.splice(todos.findIndex((todo) => todo.body === name), 1);
});

console.log("Removing Call Mom from list");
removeTodo("Call mom");
console.log("Resulting todos:", todos);


console.log("Sorting todos");
const sortTodos = ((someArray) => {
    return someArray.sort((item1, item2) => {
        item1.completed === item2.completed
            ? 0
            : item1.completed
                ? -1
                : 1;

    })
});

console.log("Sorted:", sortTodos(todos));
