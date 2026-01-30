function countItems(array, condition) {
  let count = 0;

  for (const element of array) {
    if (condition(element)) {
      count++;
    }
  }

  return count;
}

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кот", "собака", "мышь", "попугай", "хомяк"];

const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;

console.log("Парных чисел:", countItems(numbers, isEven));
console.log("Чисел больше 10:", countItems(numbers, isLarge));
console.log("Кратких слов:", countItems(words, isShort));



const calculate = (a, b, operation) => {
  return operation(a, b);
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  if (b === 0) {
    return "Error: division by zero";
  }
  return a / b;
};

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, subtract));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));
console.log(calculate(10, 0, divide));



function repeatMessage(times, messageCreator) {
  for (let i = 0; i < times; i++) {
    messageCreator(i);
  }
}


repeatMessage(3, index => {
  console.log(`Message number ${index + 1}`);
});

repeatMessage(5, index => {
  console.log(`Hello! This is iteration ${index}`);
});
