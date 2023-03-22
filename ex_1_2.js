function printOut(array) {
    array.forEach((element, index) => console.log(`[${index}]=${element}`));
    console.log('\n');
}

function convertToDate(array) {
    for (var i = 0; i < dates.length; i++) {
        dates[i] = new Date(dates[i])
    }
}

const dates = [
    '1990/01/02',
    '2021/02/27',
    '2019/01/01',
    '1972/05/05',
    '2021/01/12',
    '2018/12/01'
];

// That's another way of doing that.
// console.log(dates.sort((v1, v2) => new Date(v1) - new Date(v2)));


// console.log('Date array before converting to Date objects: ');
// printOut(dates);

// convertToDate(dates);

// console.log('Date array after converting to Date objects: ');
// printOut(dates);

// var oldestDate = dates[0];

// for (var i = 1; i < dates.length; i++) {
//     if (dates[i] < oldestDate) {
//         oldestDate = dates[i];
//     }
// }

// console.log('The oldest date is ' + oldestDate);

let std_dt = 'DD/MM/YYYY';
let moment = require('moment');
let minDate = moment(dates[0], std_dt);
console.log(dates[0]);
console.log(minDate);

dates.forEach((date) => {
    let d = moment(date, std_dt);
    if (d < minDate) {
        minDate = d;
    }
});

console.log('minDate=' + minDate.format(std_dt));
