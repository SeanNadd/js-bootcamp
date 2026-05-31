// JavaScript logical AND and OR operators
// && means AND: true only when both sides are true.
// || means OR: true when at least one side is true.

let temp = 65;

if(60 <= temp && temp <= 90){
    console.log("The weather is pretty nice!");
}else if(0 <= temp || temp >= 120){
    console.log("It's dangerous outside.");
}else{
    console.log("The weather is meh.");
}



/********************************************************/
// Challenge area

let isGuestOneVegan, isGuestTwoVegan;

isGuestOneVegan = true;
isGuestTwoVegan = false;

// If both guests are vegan, every dish offered should be vegan.
if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Only offer up vegan dishes.");
// If at least one guest is vegan, include vegan options.
}else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Make sure to offer up some vegan options.");
// If neither guest is vegan, there are no vegan restrictions.
}else{
    console.log("Offer up anything on the menu.");
}  
