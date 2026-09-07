const isEven = require('./isEven');

console.log('Custom module demonstration started...');

const numbers = [2, 5, 10, 13];

numbers.forEach((number) => {
  console.log(`${number} is ${isEven(number) ? 'Even' : 'Odd'}`);
});

console.log('Custom module demonstration finished.');
