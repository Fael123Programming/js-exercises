// Arrays.
var data_arr = ['Paul', 1000, 'Jorge Philipps won the context!', 2000, 7, true, {name: 'Michael Jackson', country: 'USA'}];

// foreach: (item, index) callback should be passed in.
// Execute something for each item.
var items_grouped = '', index_summed = 0;
data_arr.forEach((item, index) => {items_grouped += item; index_summed += index;});
// console.log(`items_grouped=${items_grouped}, index_summed=${index_summed}`);

// filter: (item) callback should be passed in.
// Get the items that pass some tests.
var numbers = data_arr.filter((item) => typeof(item) == 'number');
// console.log(numbers);

// map: (item) callback should be passed in.
// Create a second array based on some operations made on the first.
var numbers_squared = numbers.map((item) => item * item);
// console.log(numbers_squared);

var data = new Map();
data.set(1, 'The champion');
data.set(2, 'The runner-up');
data.set(3, 'The third place');

// console.log(data);

// console.log(data.get(3));

var set_data = new Set([1, 1, 1, 3, 2, 2, 3]);  // No repetitive data.
set_data.add(1);
set_data.add(3);
set_data.add(2);
console.log(set_data);

// Primitive data structures.
// strings, objects.

// Non-primitive data structures.

// Linear data structures.
// Static data structures: arrays;
// Dynamic data structures: linked-lists, queues, stack, etc;

// Non-linear data structures.
// Trees, graphs, etc.