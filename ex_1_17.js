function addTwoNums(a, b) {
    var res = a + b;
    console.log(res);
}
// console.log(letterFinder('battle', 't'));

function letterFinder(word, match) {
    const matchPos = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            matchPos.push(i);
        }
    }
    return matchPos;
}

// addTwoNums(10, 20);

const train = [
    'wheat',
    'barley',
    'salt',
    'potato',
    'rocks'
]

// console.log(train[0]);

const assistantManager = {
    movement: 3,
    socialSkills: 50,
    streeSmarts: 10
}

console.log(assistantManager);

assistantManager['next Achievement'] = 'open a new store';
assistantManager.movement = 5;

console.log(assistantManager);

const player = {}
player['name'] = 'Rafael';
player.bestFriend = 'Jesus';
player['his age'] = 20;
player['100'] = 100;

var keys = Object.keys(player);

for (let i = 0; i < keys.length; i++) {
    console.log(player[keys[i]]);
}

function printValues(obj) {
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(`${keys[i]}: ${obj[keys[i]]}`);
    }
}

printValues(player);

function arrayBuilder(a, b, c) {
    let arr = [];
    arr.push(a);
    arr.push(b);
    arr.push(c);
    return arr;
}

function arrayBuider2(...args) {
    return args;
}

console.log(arrayBuilder(1, 'Banana', 'Car'));

console.log(arrayBuider2(1, 'Banana', 'Car', true, Math.PI, Math.E));
