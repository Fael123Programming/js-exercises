try {
    // console.log(a + b);
    // throw new ReferenceError('Jesus I love you so much!');
} catch (err) {
    console.log('There was an error: ' + err)
}
console.log('My program remains running');

const addTwoNums = function (a, b) {
    try {
        var msg = 'first';
        if (typeof(a) === 'number' && (msg = 'second') && typeof(b) === 'number') {
            console.log(a + b);
        } else {
            throw new ReferenceError(`the ${msg} argument is not a number`);
        }
    } catch (err) {
        console.log(err);
    }
}

addTwoNums(5, 5);

var res;
console.log(res === null);

var str = 'hello';
console.log(str.match('hello'));

try {
    Number(5).toPrecision(300);
} catch (err) {
    console.log('There was an error');
}

