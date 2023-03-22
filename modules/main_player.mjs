import Player from './player.mjs';
import { getPlayerInfo } from './functions_player.mjs';

const players = [
    new Player('Neymar', 29, 10, 'Midfielder'),
    new Player('Lionel Messi', 34, 32, 'Midfielder'),
    new Player('Killian Mbappe', 23, 7, 'Attacker'),
    new Player('Marcus Rashford', 25, 9, 'Attacker'),
    new Player('Rafael Leao', 28, 17, 'Attacker'),
    new Player('Vinicius Jr.', 25, 20, 'Attacker')
]

console.log(`There are ${Player.players} players.`)
players.forEach(p => console.log(getPlayerInfo(p)));
