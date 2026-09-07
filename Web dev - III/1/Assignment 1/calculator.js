const [, , operation, a, b] = process.argv;

console.log('Starting CLI calculator...');

const num1 = Number(a);
const num2 = Number(b);

if (!operation || Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('Usage: node calculator.js <add|subtract|multiply|divide> <number1> <number2>');
  process.exit(1);
}

let result;

switch (operation.toLowerCase()) {
  case 'add':
  case '+':
    result = num1 + num2;
    break;
  case 'subtract':
  case '-':
    result = num1 - num2;
    break;
  case 'multiply':
  case '*':
    result = num1 * num2;
    break;
  case 'divide':
  case '/':
    if (num2 === 0) {
      console.log('Error: Division by zero is not allowed.');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.log(`Invalid operation: ${operation}`);
    console.log('Use add, subtract, multiply, or divide.');
    process.exit(1);
}

console.log(`Operation: ${operation}`);
console.log(`Result: ${result}`);
console.log('Calculator finished.');
