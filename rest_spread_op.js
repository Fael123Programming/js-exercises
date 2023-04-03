function showItinerary(...places) {
    for (i = 0; i < places.length; i++) {
        console.log(places[i]);    
    }
}

showItinerary('Rome', 'Paris', 'Barcelona');  // Rest operator: pack the values into an array.

const sum = (n1, n2) => n1 + n2;

const nums = [10, 20];

console.log(sum(...nums));  // Spread operator: unpack the values from an array into separate variables.
