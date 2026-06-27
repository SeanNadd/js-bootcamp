// JavaScript passes object references by value: a function can mutate the original
// object through its copied reference, but reassigning the parameter does not replace it.
let myAccount = {
    name: "John Doe",
    expenses: 0,
    income: 0
};

console.log(myAccount); // Output: { name: 'John Doe', expenses: 0, income: 0 }

let testReplace = function(account) {
    account = {
        name: "Jane Doe"
    };
    console.log(account); // Output: { name: 'Jane Doe' } - this is a new object, not the original
}

testReplace(myAccount);
console.log(myAccount); // Output: { name: 'John Doe', expenses: 0, income: 0 } - original object is
//  unchanged

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
};

let addExpense = function(account, amount) {
    account.expenses += amount;
};

let addIncome = function(account, amount) {
    account.income += amount;
};

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses;
    return `${account.name} has $${balance} in the account. Income: $${account.income}, Expenses: $${account.expenses}.`;
};

addIncome(myAccount, 1000);
addExpense(myAccount, 200);
console.log(getAccountSummary(myAccount)); // Output: John Doe has $800 in the account. Income: $1000, Expenses: $200.
