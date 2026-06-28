const account =
{
    name: "Sean",
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    },
    addIncome: function (description, amount) {
        this.income.push({ description, amount });
    },
    calculateExpenses: function () {
        const balance = this.expenses.reduce((total, expense) => total + expense.amount, 0);
        return balance;
    },
    calculateIncome: function () {
        const balance = this.income.reduce((total, income) => total + income.amount, 0);
        return balance;
    },
    calculateBalance: function () {
        const balance = this.calculateIncome() - this.calculateExpenses();
        return balance;
    },
    getAccountSummary: function () {
        const balance = this.calculateBalance();
        return `${this.name}'s balance is: ${balance}. Income: ${this.calculateIncome()}. Expenses: ${this.calculateExpenses()}`;
    }
};

account.addExpense("Rent", 950);
account.addExpense("Coffee", 2);
account.addExpense("Groceries", 150);
account.addIncome("Salary", 2000);
account.addIncome("Side Hustle", 500);

console.log(account.getAccountSummary()); // Sean's balance is: -1102. Income: 2500. Expenses: -1102
