import CalculatorName from './functions.mjs'; // Import the default import.
import {
    sum as doSum,
    sub as doSubtraction,
    mult as doMultiplication,
    div as doDivision
} from './functions.mjs';

var a = 10, b = 0;
console.log(`Welcome to the ${CalculatorName}`);
console.log(doSum(a, b));
console.log(doSubtraction(a, b));
console.log(doMultiplication(a, b));
console.log(doDivision(a, b));