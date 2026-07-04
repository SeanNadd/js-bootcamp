const initialNotes = [
    {
        title: 'My next trip',
        body: 'I would like to go to Spain'
    },
    {
        title: 'Habbits to work on',
        body: 'Exercise, Eating a bit better'
    },
    {
        title: 'Office modification',
        body: 'Get a new seat'
    },
    {
        title: 'Grocery list',
        body: 'Milk, Bread, Eggs'
    }
];

let notes = [...initialNotes];

const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const getFilteredNotes = (filterString = '') =>
    notes.filter((note) => note.body.toLowerCase().includes(filterString.toLowerCase()));

const getSortedNotes = (orderParam, notesToSort) => {
    const sortedNotes = [...notesToSort];

    if (orderParam) {
        sortedNotes.sort(orderParam);
    }

    return sortedNotes;
};

const renderNotes = (notesToRender) => {
    selectAll('p.note').forEach((noteElement) => noteElement.remove());
    selectAll('.noteRemoveBtn').forEach((button) => button.remove());

    notesToRender.forEach((note, index) => {
        const noteElement = document.createElement('p');
        noteElement.className = 'note';
        noteElement.textContent = `${note.title} - ${note.body}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove note';
        removeButton.className = 'noteRemoveBtn';
        removeButton.id = index;
        addRemoveNoteListener(note, removeButton);

        document.querySelector('body').appendChild(noteElement).appendChild(removeButton);
    });
};

const addFilterListener = (inputElement) => {
    inputElement.addEventListener('input', (event) => {
        const filterValue = event.target.value;
        const filteredNotes = getFilteredNotes(filterValue);
        renderNotes(filteredNotes);
    });
};

const addInputField = () => {
    const inputElement = document.createElement('input');
    inputElement.className = 'textField';
    inputElement.id = 'textInput';
    document.querySelector('body').appendChild(inputElement);
    addFilterListener(inputElement);
};

const addNoteFormListener = () => {
    select('#note-form').addEventListener('submit', (event) => {
        event.preventDefault();

        const newNote = {
            title: event.target.elements.title.value,
            body: event.target.elements.body.value
        };

        notes.push(newNote);
        renderNotes(getFilteredNotes(select('#textInput').value));
        event.target.reset();
    });
};

const addSortSelectListener = () => {
    select('#sortSelector').addEventListener('change', (event) => {
        let orderParam = '';

        if (event.target.value === 'alphabet') {
            orderParam = (item1, item2) => {
                const firstTitle = item1.title.toLowerCase();
                const secondTitle = item2.title.toLowerCase();

                if (firstTitle === secondTitle) {
                    return 0;
                }

                return firstTitle < secondTitle ? -1 : 1;
            };
        }

        const filteredNotes = getFilteredNotes(select('#textInput').value);
        const orderedNotes = getSortedNotes(orderParam, filteredNotes);
        renderNotes(orderedNotes);
    });
};

const addRemoveNoteListener = (note, button) => {
    button.addEventListener('click', () => {
        const noteIndex = notes.indexOf(note);

        if (noteIndex !== -1) {
            notes.splice(noteIndex, 1);
        }

        renderNotes(getFilteredNotes(select('#textInput').value));
    });
};

const initializeApp = () => {
    addInputField();
    addSortSelectListener();
    addNoteFormListener();
    renderNotes(notes);
};

initializeApp();

localStorage.setItem('key', 'value');
