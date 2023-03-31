class Restaurant {
    #chief
    constructor(chief) {
        this.#chief = chief;
    }

    set chief(chief) {
        this.#chief = chief;
    }

    get chief() { 
        return this.#chief;
    }

    prepareFood() {
        this.#chief.cook();
    }
}

class Chief {
    cook() {
        console.log('Cooking basic food...');
    }
}

class ItalianChief extends Chief {
    cook() {
        console.log('Cooking italian food...');
    }
}

class FrenchChief extends Chief {
    cook() {
        console.log('Cooking french food...');
    }
}

const rest = new Restaurant(new ItalianChief());
rest.prepareFood();
rest.chief = new FrenchChief();
rest.prepareFood();