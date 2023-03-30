console.log('Math Object Usage');

function randint(a, b) {
    return parseInt(a + (Math.random() * (b - a + 1)));
}

const a = 1, b = 3;
for (let i = 0; i < b; i++) {
    console.log(randint(a, b));
}
