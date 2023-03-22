const delay = ms => new Promise(res => setTimeout(res, ms));

var car = {
    make: 'Ferrari',
    model: '458 Italy',
    str: function() {
        return `[${this.make} : ${this.model}]`;
    },
    run: async function(secs=1) {
        act_secs = secs * 1000;
        while (true) {
            process.stdout.write('.');
            await delay(act_secs);
        }
    }
}

console.log(car.str());
car.run(.3);
