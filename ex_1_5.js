var person = {
    name: 'Rafael Guimaraes', 
    city: 'Piracanjuba,Goias,Brazil',
    date_of_birth: '6/11/2002',
    age: function() {
        const millisecs = new Date() - new Date(this.date_of_birth);
        var age = millisecs / (365 * 24 * 60 * 60 * 1000); // Years * days * hours * minutes * seconds
        return Math.trunc(age);
    },
    hobbies: ['playing football', 'playing accoustic guitar', 'learning new languages'],
    print_info: function () {
        console.log(`Name: ${this.name}`)
        console.log(`City: ${this.city}`)
        console.log(`Date of bith: ${this.date_of_birth}`);
        console.log(`Age: ${this.age()}`)
        console.log(`Hobbies: ${this.hobbies}`)
    }
}

person.print_info()
