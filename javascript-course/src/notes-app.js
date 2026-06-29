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

let firstRender = false;

const addFilterListener = ((inputElement) => 
    inputElement.addEventListener('input', (e) => {
        const filteredArray = notes.filter((element) => element.body.includes(e.target.value))
        console.log(filteredArray)
        pAppender(false, filteredArray)
    })
)

const addInputField = (() => {
    const inputElem = document.createElement('input');
    inputElem.className = 'textField';
    inputElem.id = 'textInput';
    document.querySelector('body').appendChild(inputElem);
    addFilterListener(inputElem)
})



// Apply the filter to the notes array before running any of the renders,



const addRemoveNoteListener = ((note, button) => {
    button.addEventListener('click', () => {
        const noteIndex = notes.indexOf(note);

        notes.splice((noteIndex), 1);
        pAppender(false, notes)
    })
})

const pAppender = (firstRender = true, notesArray) => {
    if(!firstRender){
        document.querySelectorAll('p').forEach((e) => e.remove())
        document.querySelectorAll('button').forEach((e) => e.remove())
    }
    notesArray.forEach((note, index) => {
        const newP = document.createElement('p');
        newP.className = 'note';
        newP.textContent = note.title + " - " + note.body;

        const removeNote = document.createElement('button');
        removeNote.textContent = 'Remove note';
        removeNote.className = 'noteRemoveBtn';
        removeNote.id = index;
        addRemoveNoteListener(note, removeNote);

        document.querySelector('body').appendChild(newP).appendChild(removeNote);
    });

    const createNote = document.createElement('button');
    createNote.textContent = "New Note";
    createNote.id = "create-note";
    document.querySelector('body').appendChild(createNote);

    createNote.addEventListener('click', (e) => console.log("Create note clicked"));
};

addInputField();
pAppender(true, notes);
