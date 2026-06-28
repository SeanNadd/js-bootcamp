const account =
{
    name: "Sean",
    expenses: [],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },
    calculateBalance: function () {
        const balance = this.expenses.reduce((total, expense) => total + expense.amount * -1, 0);
        return balance;
    },
    getAccountSummary: function () {
        const balance = this.calculateBalance();
        return `${this.name}'s balance is: ${balance}`
    }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addExpense("Groceries", 150);

console.log(account.getAccountSummary()); // Sean's balance is: -1102
