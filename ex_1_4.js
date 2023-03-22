var person = {
    name: 'Rafael Guimaraes', 
    city: 'Piracanjuba,Goias,Brazil',
    date_of_birth: '6/11/2002',
    age: function() {
        const millisecs = new Date() - new Date(this.date_of_birth);
        var age = millisecs / (365 * 24 * 60 * 60 * 1000); // Years * days * hours * minutes * seconds
        return Math.trunc(age);
    },
    hobbies: ['playing football', 'playing accoustic guitar', 'learning new languages']
}

console.log(`Hello, I'm ${person.name} from ${person.city}. I was born at ${person.date_of_birth}.`);
console.log(`My age is ${person.age()} and the things I like the most are ${person.hobbies}`);
