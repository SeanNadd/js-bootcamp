
/*
Scope diagram

Global scope
├── temp1
├── temp2
└── farenheitToCelsius()
    └── Function scope
        └── farenheit
*/

let temp1 = 32;
let temp2 = 68; 

let farenheitToCelsius = function(farenheit){

    let celsius = (farenheit - 32) * (5 / 9);
    if (celsius <= 0) {
        let isFreezing = true;
        return isFreezing;
    }
    return (farenheit - 32) * (5 / 9);
};  


console.log(farenheitToCelsius(temp1) + "°C is equal to " + temp1 + "°F.");
console.log(farenheitToCelsius(temp2) + "°C is equal to " + temp2 + "°F.");
