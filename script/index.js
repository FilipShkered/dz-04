const MIN_NUM_COUNTS = 1;
const MAX_NUM_COUNTS = 5;


const ACTION_LIST = ['+', '-', '*', '/']
const action = getAction();
const numCount = getNumCounts();
const numbers = getNumbers(numCount);
const result = calculate(numbers, action);

console.log(action, numCount, numbers, result)
showResult(numbers, action, result);

function getAction() {
  let action;

  do {
    action = prompt('Enter action');
  } while (!isValidAction(action));

  return action
}

function isValidAction(action) {
  return ACTION_LIST.includes(action);
}

function getNumCounts() {
  let count;

  do {
    count = prompt('Enter num counts');
  } while (!isValidNumCount(count));

  return count
}

function isValidNumCount(count) {
  return !isNaN(count) && count > MIN_NUM_COUNTS && count < MAX_NUM_COUNTS
}

function getNumbers(numCount) {
  const numbers = [];

  for (let i = 0; i < numCount; i++) {
    let number = getNumber(i);

    numbers.push(number)
  }

  return numbers
}

function getNumber(numberName) {
  let number;

  do {
    number = prompt(`Enter number ${numberName}`)
  } while (!isValidNum(number))

  return Number(number)
}

function isValidNum(number) {
  return !isNaN(number) && number !== '';
}

function calculate(numbers, action) {
  let result = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    switch (action) {
      case '+':
        result = result + numbers[i];
        break;
      case '-':
        result = result - numbers[i];
        break;
      case '*':
        result = result * numbers[i];
        break;
      case '/':
        result = result / numbers[i];
        break;
    }
  }

  return result
}

function showResult(numbers, action, result) {
  alert(`${numbers.join(` ${action}  `)} = ${result}`);
}