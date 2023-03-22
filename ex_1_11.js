class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

class Car extends Vehicle {
    #portNumbers; // Private fields.
    #hasAC;
    static #fourPortsCnt = 0; // and static.
    constructor(brand, model, portNumbers=4, hasAC=true) {
        super(brand, model);
        this.portNumbers = portNumbers;  // Using the setters.
        this.hasAC = hasAC;
        if (this.portNumbers == 4) {
            Car.#fourPortsCnt++;
        }
    }

    get portNumbers() { return this.#portNumbers; }  // Private fields accessors.

    get hasAC() { return this.#hasAC; }

    set portNumbers(v) {  // Private fields mutators.
        if (v > 0) {
            this.#portNumbers = v;
        } else {
            this.#portNumbers = 4;
        }
    }

    set hasAC(hasAC) {
        if (typeof(hasAC) == 'boolean') {
            this.#hasAC = hasAC;
        } else {
            this.#hasAC = true;
        }
    }

    static get fourPortsCtn() { return Car.#fourPortsCnt; }
}


// var v = new Vehicle('Ford', 'Mustang');

// console.log(v);

var c = new Car('A', 'B');
for (var i = 0; i < 10; i++) {
    var c = new Car('Chevrolet', 'Camaro SS');
}

console.log(Car.fourPortsCtn);