let myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pageCount: 180
};

let otherBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pageCount: 281
};

let bookPrinter = function(book) {
    return {
        authorAndTitle: `${book.title} by ${book.author}`,
        fullDetails: `${book.title} by ${book.author} has ${book.pageCount} pages.`
    }
};

console.log(bookPrinter(myBook).authorAndTitle); // Output: The Great Gatsby by F. Scott Fitzgerald
console.log(bookPrinter(otherBook).authorAndTitle); // Output: To Kill a Mockingbird by Harper Lee


// Challenge: Converter function that takes F and returns C and K

let temperature = 32; // Example temperature in Fahrenheit

let convertTemperature = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    let kelvin = celsius + 273.15;
    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    };
};

let convertedTemp = convertTemperature(temperature);
console.log(`${convertedTemp.fahrenheit}°F is ${convertedTemp.celsius.toFixed(2)}°C and ${convertedTemp.kelvin.toFixed(2)}K.`); 
// Output: 32°F is 0.00°C and 273.15K.  