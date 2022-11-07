// ask the user for the first number
// ask the user for the second number
// ask the user for the operation
// perform the operation
// display the result of the operation 

// TESTING Git
const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function invalidNumber(num) {
  return num.trimStart() === '' || Number.isNaN(Number(num));
}
prompt('Welcome to the Calculator!');
calculator();

function onceAgain() {
  prompt('Great, let\'s play again!');
  calculator();
}

function calculator() {
  prompt('What is the first number?');
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt('Hmmm... that doesn\'t look like a valid number.');
    number1 = readline.question();
  }

  prompt('What is the second number?');
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt('Hmmm... that doesn\'t look like a valid number.');
    number2 = readline.question();
  }

  prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose either 1, 2, 3, or 4.');
    operation = readline.question();
  }

  let output;

  switch (operation) {
    case '1':
      output = +number1 + +number2;
      break;
    case '2':
      output = +number1 - +number2;
      break;
    case '3':
      output = +number1 * +number2;
      break;
    case '4':
      output = +number1 / +number2;
      break;
  }
  prompt(`The result is ${output}.`);

  prompt('Would you like to play again?\n1) Yes 2) No');
  let playAgain = readline.question();

  while (!['1', '2'].includes(playAgain)) {
    prompt('Must choose either 1 or 2.');
    playAgain = readline.question()
  }

  if (playAgain === '1') {
    onceAgain(); 
  } else {
    prompt('Thank you for playing!');
  }
}
