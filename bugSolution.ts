function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

console.log(add(2, 3)); // 5
console.log(subtract(5, 2)); // 3
console.log(multiply(4, 2)); // 8

try {
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // throws an error, but is caught below
} catch (e) {
  console.error('Error:', e.message);
}
console.log('Program continues execution');