let {PI} = Math;  // Object destructuring.
console.log(PI);

let arr = ['red', 'orange', 'blue']

for (var i of arr) {
    console.log(i);
}

let car = {
    brand: 'ford',
    model: 'F-250',
    color: 'red',
    year: 2020
}

console.log('---------------------------');

for (prop in car) {
    console.log(prop);
}

console.log('---------------------------');

for (var key_value of Object.entries(car)) {
    console.log(`${key_value[0]}=${key_value[1]}`);
}
