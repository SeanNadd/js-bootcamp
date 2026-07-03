let notes = [
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

const arrayFilterer = ((filterString) => {        
        return notes.filter((element) => 
            element.body.includes(filterString)
    )})
        

const addFilterListener = ((inputElement) => 
    inputElement.addEventListener('input', (e) => {
        console.log(e);
        let filteredArray = arrayFilterer(e.target.value)
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

const noteFormHandles = ((notes) => document.getElementById('note-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newElement = {title: '', body: ''}
    newElement.title = e.target.elements.title.value;
    newElement.body = e.target.elements.body.value;
    console.log(newElement)
    notes.push(newElement);
    pAppender(false, arrayFilterer(document.querySelector('#textInput').value))
}))



// Apply the filter to the notes array before running any of the renders,

const addRemoveNoteListener = ((note, button) => {
    button.addEventListener('click', () => {
        const noteIndex = notes.indexOf(note);

        notes.splice((noteIndex), 1);

        pAppender(false, arrayFilterer(document.querySelector('#textInput').value))
    })
})

const pAppender = (firstRender = true, notesArray) => {
    if(!firstRender){
        document.querySelectorAll('p').forEach((e) => e.remove())
        document.querySelectorAll('.noteRemoveBtn').forEach((e) => e.remove())

    }
    notesArray.forEach((note, index) => {
        const newP = document.createElement('p');
        newP.className = 'note';
        newP.textContent = note.title + " - " + note.body;

        const buttonRemove = document.createElement('button');
        buttonRemove.textContent = 'Remove note';
        buttonRemove.className = 'noteRemoveBtn';
        buttonRemove.id = index;
        addRemoveNoteListener(note, buttonRemove);

        document.querySelector('body').appendChild(newP).appendChild(buttonRemove);
    });

};

document.querySelector('#sort-selector').addEventListener('change', (e) => {
    e.target.value
})

addInputField();
noteFormHandles(notes);
pAppender(true, notes);
