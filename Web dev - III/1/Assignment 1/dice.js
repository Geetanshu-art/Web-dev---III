const crypto = require('crypto');

function rollDice() {
  return crypto.randomInt(1, 7);
}

const rolls = Number(process.argv[2]) || 1;

console.log(`Rolling the dice ${rolls} time(s)...`);

for (let i = 1; i <= rolls; i += 1) {
  console.log(`Roll ${i}: Dice Rolled: ${rollDice()}`);
}

console.log('Dice generator finished.');
