// Spread operator.

var fruits =  ['Apple', 'Orange', 'Banana'];

var newFruitArray = [...fruits];

console.log(newFruitArray);

var arr1 = ['A', 'B', 'C'], arr2 = ['X', 'Y', 'Z'];

var result = [...arr1, ...arr2];  // arr1.concat(arr2);

console.log(result);

fruits = [...fruits, 'cherry']  // fruits.push('cherry');

console.log(fruits); 
