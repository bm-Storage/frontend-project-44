import readlineSync from 'readline-sync';
import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, getRandomOperator, maxRoundCount,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('What is the result of the expression?');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const operator = getRandomOperator();

    console.log(`Question:${firstNumber} ${operator} ${secondNumber}!`);
    const answer = readlineSync.question('Your answer: ');
    let correctAnswer;

    switch (operator) {
      case '+':
        correctAnswer = firstNumber + secondNumber;
        break;
      case '-':
        correctAnswer = firstNumber - secondNumber;
        break;
      default:
        correctAnswer = firstNumber * secondNumber;
    }
    if (!isAnswerCorrect(answer, correctAnswer, userName)) {
      return;
    }

    console.log(`Congratulations, ${userName}!`);
  }
};
