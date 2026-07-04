const todos =
    [{ title: "1", body: "Rent apartment Brussels", completed: false },
    { title: "2", body: "Clean the house", completed: true },
    { title: "3", body: "Update CV", completed: false },
    { title: "4", body: "Buy groceries", completed: true },
    { title: "5", body: "Call mom", completed: false }];



const filterTodos = (targetArray, filterParam = "") => {
    targetArray = targetArray.filter((elem) => elem.body.includes(filterParam))
    pAppender(targetArray, true)
}


const addFilterEvent =  (targetArray, inputElement) => {
    inputElement.addEventListener('input', (e) => {
        filterTodos(targetArray, e.target.value)
    })
}

const todoFormHandle = (() => {
    
    const form = document.querySelector('#new-todo');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let newTodo = {title: '', body: '', completed: false};
        newTodo.body = e.target.elements.todoBody.value;
        todos.push(newTodo);
        filterTodos(todos, document.querySelector('#searchText').value)
    })
});

const addCheckboxListeners = () => {
    document.querySelectorAll('input[type=checkbox]').forEach((cElem) => {
        cElem.onchange = () => {
            const elem = todos.find((element) => element.body === cElem.parentNode.textContent);
            if (elem) {
                elem.completed = cElem.checked;
                const searchInput = document.querySelector('#searchText');
                const filterValue = searchInput ? searchInput.value : '';
                filterTodos(todos, filterValue);
            }
        };
    });
};

const addInputElement = () => {
    const searchInput = document.createElement('input');
    searchInput.id = 'searchText';
    searchInput.type = 'text';
    searchInput.placeholder = 'Add your filter text';
    addFilterEvent(todos, searchInput);
    document.querySelector('body').appendChild(searchInput);
}

const pAppender = (todos = todos, replace = false) => {
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

    addCheckboxListeners();
};


addInputElement();
pAppender(todos, false);
todoFormHandle();






