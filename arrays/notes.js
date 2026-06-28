/*
Common JavaScript array methods:

- push(item): Adds an item to the end and returns the new length.
- pop(): Removes and returns the last item.
- unshift(item): Adds an item to the beginning and returns the new length.
- shift(): Removes and returns the first item.
- includes(item): Checks whether the array contains an item.
- indexOf(item): Returns the item's index, or -1 if it is not found.
- slice(start, end): Copies part of an array without changing the original.
- splice(start, count, ...items): Removes, replaces, or inserts items in the original array.
- forEach(callback): Runs a function once for each item.
- map(callback): Creates a new array by transforming each item.
- filter(callback): Creates a new array with the items that pass a test.
- find(callback): Returns the first item that passes a test.
- some(callback): Checks whether at least one item passes a test.
- every(callback): Checks whether every item passes a test.
- reduce(callback, initialValue): Combines all items into one value.
- sort(compareFunction): Sorts the original array in place.
- join(separator): Combines all items into a string.
*/

// push() changes the array and returns its new length.
const pushExample = [1, 2];
const pushLength = pushExample.push(3);
console.log("push:", pushExample, "length:", pushLength); // [1, 2, 3], length: 3

// pop() changes the array and returns the removed last item.
const popExample = [1, 2, 3];
const poppedItem = popExample.pop();
console.log("pop:", popExample, "removed:", poppedItem); // [1, 2], removed: 3

// unshift() changes the array and returns its new length.
const unshiftExample = [2, 3];
const unshiftLength = unshiftExample.unshift(1);
console.log("unshift:", unshiftExample, "length:", unshiftLength); // [1, 2, 3], length: 3

// shift() changes the array and returns the removed first item.
const shiftExample = [1, 2, 3];
const shiftedItem = shiftExample.shift();
console.log("shift:", shiftExample, "removed:", shiftedItem); // [2, 3], removed: 1

// includes() returns true or false.
console.log("includes:", ["apple", "banana"].includes("banana")); // true

// indexOf() returns an item's position, or -1 when it is absent.
console.log("indexOf:", ["apple", "banana"].indexOf("banana")); // 1

// slice() returns a new array and leaves the original unchanged.
const sliceExample = [1, 2, 3, 4];
const slicedItems = sliceExample.slice(1, 3);
console.log("slice:", slicedItems, "original:", sliceExample); // [2, 3], original: [1, 2, 3, 4]

// splice() changes the original array and returns the removed items.
const spliceExample = [1, 2, 3, 4];
const splicedItems = spliceExample.splice(1, 2, 10);
console.log("splice:", spliceExample, "removed:", splicedItems); // [1, 10, 4], removed: [2, 3]

// forEach() runs code for every item and returns undefined.
const forEachResult = ["A", "B"].forEach((item) => console.log("forEach item:", item));
console.log("forEach return value:", forEachResult); // undefined

// map() transforms every item and returns a new array.
console.log("map:", [1, 2, 3].map((number) => number * 2)); // [2, 4, 6]

// filter() returns a new array containing only matching items.
console.log("filter:", [1, 2, 3, 4].filter((number) => number % 2 === 0)); // [2, 4]

// find() returns the first matching item.
console.log("find:", [1, 2, 3, 4].find((number) => number > 2)); // 3

// some() returns true when at least one item matches.
console.log("some:", [1, 2, 3].some((number) => number > 2)); // true

// every() returns true only when all items match.
console.log("every:", [1, 2, 3].every((number) => number > 0)); // true

// reduce() combines all items into one value.
console.log("reduce:", [1, 2, 3, 4].reduce((total, number) => total + number, 0)); // 10

// sort() changes and returns the original array.
const sortExample = [10, 2, 5];
console.log("sort:", sortExample.sort((a, b) => a - b)); // [2, 5, 10]

// join() returns a string and leaves the array unchanged.
console.log("join:", ["red", "green", "blue"].join(" - ")); // red - green - blue


let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(i + 1);
}
console.log("numbers:", numbers); // [1, 2, 3, 4, 5]


let personObject = { name: "Sean", age: 40 };

let objectArray = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 35 }];

objectArray.push(personObject);

let someFunction = (somePerson) => { objectArray[objectArray.indexOf(somePerson)].name = "Sean Updated"; };
someFunction(personObject);

console.log(`The index of "Sean Updated" is: ${objectArray.indexOf(personObject)}`);


let someFindingFunction = (someName) => {
    return objectArray.find((somePerson) => somePerson.name === someName);
};


console.log(someFindingFunction("Sean Updated") ? "Found" : "Not Found"); // Found


const findNote = (objects, objectName) => {
    return objects.findIndex((obj) => obj.name === objectName);
};

console.log(`The index of "Sean Updated" is: ${findNote(objectArray, "Sean Updated")}`);   // 3


const filterNotes = (notes, filterParam) => {
    return notes.filter((note) => note.age > filterParam);
};

console.log("Current notes:", objectArray);
console.log("Filtered notes:", filterNotes(objectArray, 30)); // [{name: "Charlie", age: 35}, {name: "Sean Updated", age: 40}]