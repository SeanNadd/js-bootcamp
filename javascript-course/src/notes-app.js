const notes = [
    {
        title: "My next trip",
        body: "I would like to go to Spain"
    },
    {
        title: "Habbits to work on",
        body: "Exercise, Eating a bit better"
    },
    {
        title: "Office modification",
        body: "Get a new seat"
    },
    {
        title: "Grocery list",
        body: "Milk, Bread, Eggs"
    }
];

const addRemoveNoteListener = ((noteIndex, button) => {
    button.addEventListener('click', () => {
        notes.splice(noteIndex, 1);
        pAppender(false)
    })
})

const pAppender = (firstRender = true) => {
    if(!firstRender){
        document.querySelectorAll('p').forEach((e) => e.remove())
        document.querySelectorAll('button').forEach((e) => e.remove())
    }
    notes.forEach((note, index) => {
        const newP = document.createElement('p');
        newP.className = 'note';
        newP.textContent = note.title + " - " + note.body;

        const removeNote = document.createElement('button');
        removeNote.textContent = 'Remove note';
        removeNote.className = 'noteRemoveBtn';
        removeNote.id = index;
        addRemoveNoteListener(index, removeNote);

        document.querySelector('body').appendChild(newP).appendChild(removeNote);
    });

    const createNote = document.createElement('button');
    createNote.textContent = "New Note";
    createNote.id = "create-note";
    document.querySelector('body').appendChild(createNote);

    createNote.addEventListener('click', (e) => console.log("Create note clicked"));
};

pAppender();