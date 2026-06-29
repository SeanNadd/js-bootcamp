const todos =
    [{ title: "Todo 1", body: "Rent apartment Brussels", completed: false },
    { title: "Todo 2", body: "Clean the house", completed: true },
    { title: "Todo 3", body: "Update CV", completed: false },
    { title: "Todo 4", body: "Buy groceries", completed: true },
    { title: "Todo 5", body: "Call mom", completed: false }];

const pAppender = (replace = false) => {
    if (replace) {
        document.querySelectorAll('p').forEach((p) => p.remove());
    }

    todos.sort((item1, item2) =>
        item1.completed === item2.completed ? 0 : item1.completed ? 1 : -1
    );

    todos.forEach((todo) => {
        const p = document.createElement('p');
        const c = document.createElement('input');

        c.type = 'checkbox';
        c.checked = todo.completed;
        p.textContent = todo.body;

        p.appendChild(c);
        document.querySelector('body').appendChild(p);
    });

    addListeners();
};

const addListeners = () => {
    document.querySelectorAll('input[type=checkbox]').forEach((cElem) => {
        cElem.onchange = () => {
            const elem = todos.find((element) => element.body === cElem.parentNode.textContent);
            if (elem) {
                elem.completed = cElem.checked;
                pAppender(true);
            }
        };
    });
};

pAppender();



