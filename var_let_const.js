console.log(variable);  // No error: using 'var' a variable can't be accessed before declaration.
variable = 100;

var variable = 'string';

var variable = 'other string';

console.log(variable);

{
    // console.log(scopedVariable); // ReferenceError
    let scopedVariable = 'string';

    // let scopedVariable = 'other string'; // SyntaxError: can't redeclared like using 'var'.
    console.log(scopedVariable);
}

if (variable) {
    // console.log(unchangeable); // ReferenceError
    const unchangeable = 'unchangeable';

    // unchangeable = 'other unchangeable'; // TypeError: can't be reassigned.
    // const unchangeable = 'other other unchangeable'; // SyntaxError: neither reassign nor redeclare.

    console.log(unchangeable);

    // const prob; // SyntaxError: must be assigned when declared.
}

// console.log(scopedVariable); // ReferenceError: does not exist in global scope.

// console.log(unchangeable);  // ReferenceError: does not exist in global scope.


var globalVar = 77;

function scopeTest() {
    var localVar = 88; // Also scoped.
}

// console.log(localVar);  // ReferenceError

// var      -       let      -      const
// Less strict -------------- More strict