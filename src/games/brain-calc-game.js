import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, getRandomOperator, maxRoundCount, getUserAnswer,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('What is the result of the expression?');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();
    const operator = getRandomOperator();

    const userAnswer = getUserAnswer(firstNumber, operator, secondNumber);
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
    if (!isAnswerCorrect(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
