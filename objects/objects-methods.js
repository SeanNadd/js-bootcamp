let restaurant = {
    name: "The Good Place",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft;
    },
    seatParty: function(partySize) {
        this.guestCount += partySize;
    },
    removeParty: function(partySize) {
        this.guestCount -= partySize;
    }
};

// A method is a function that is attached to an object. In this case, checkAvailability is a 
// method of the restaurant object. It uses the this keyword to refer to the restaurant object 
// itself, allowing it to access the guestCapacity and guestCount properties.;

restaurant.seatParty(72);
console.log(`Is there enough space for a party of 4? ${restaurant.checkAvailability(4)}`); // Output: true
restaurant.removeParty(5);
console.log(`Is there enough space for a party of 4? ${restaurant.checkAvailability(4)}`); // Output: true