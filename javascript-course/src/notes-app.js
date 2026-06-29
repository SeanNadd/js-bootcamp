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


const pAppender = () => {
    notes.forEach((note) => {
        const newP = document.createElement('p');
        newP.textContent = note.title + " - " + note.body;
        document.querySelector('body').appendChild(newP);
    });
};

pAppender();