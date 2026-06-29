const todos =
    [{ title: "1", body: "Rent apartment Brussels", completed: false },
    { title: "2", body: "Clean the house", completed: true },
    { title: "3", body: "Update CV", completed: false },
    { title: "4", body: "Buy groceries", completed: true },
    { title: "5", body: "Call mom", completed: false }];


const pAppender = (replace = false) => {
    if (replace) {
        document.querySelectorAll('p').forEach((p) => p.remove());
        document.querySelector('#createTodoBtn').remove();
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
    
    addButton();
    
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

const addButton = () => {
    const button = document.createElement('button');
    button.textContent = "Add Todo";
    button.id = 'createTodoBtn';
    button.onclick = () => {
        const newTodo = { title: `Todo ${todos.length + 1}`, body: `New todo ${todos.length + 1}`, completed: false };
        todos.push(newTodo);
        pAppender(true);
    };
    document.querySelector('body').appendChild(button);
};

pAppender();



