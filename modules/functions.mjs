const sum = (a, b) => a + b;

const sub = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) => b != 0 ? a / b : undefined;

const NAME = 'Super Calculator';

export default NAME; // Constant export.

export {sum, sub, mult, div, getPlayerInfo};
