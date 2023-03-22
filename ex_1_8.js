// function soma(a,b) { return a+b; }

// function subtracao(a,b) {
//     console.log(`${a} – ${b} = ${a-b}`);
//     return a-b;
// }

// function hello(name) { console.log('Hello ' + name); }

// function double(n) { console.log(n*2); }

// function currentYear() { return new Date().getFullYear(); }

// function helloWorld() { console.log('Hello World!'); }

const soma = (a, b) => a + b;

const subtracao = (a, b) => {
    console.log(`${a} – ${b} = ${a-b}`);
    return a - b;
};

const hello = (n) => console.log(`Hello, ${n}!`);

const double = (v) => console.log(v * 2);

const currentYear = () => new Date().getFullYear();

const helloWorld = () => console.log('Hello World!');

helloWorld();
