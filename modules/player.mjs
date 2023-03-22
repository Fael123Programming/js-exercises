import Person from './person.mjs';

class Player extends Person {
    static #nPlayers = 0;

    constructor(name, age, number, position) {
        super(name, age);
        this.number = number;
        this.position = position;
        Player.#nPlayers++;
    }

    static get players() {
        return Player.#nPlayers;
    }
}

export default Player;
