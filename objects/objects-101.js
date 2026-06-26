let myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pageCount: 180
};

console.log(myBook.title); // Output: The Great Gatsby


let person = {
    name: "John Doe",
    age: 30,
    location: "New York"
};

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}.`); // Output: John Doe is 30 years old and lives in New York.   

person.age += 1; // Increment age by 1
console.log(`${person.name} is now ${person.age} years old and lives in ${person.location}.`); // Output: John Doe is now 31 years old and lives in New York. 