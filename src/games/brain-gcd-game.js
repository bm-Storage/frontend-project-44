import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, maxRoundCount, gcd, getUserAnswer,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const firstNumber = getRandomInt();
    const secondNumber = getRandomInt();

    const userAnswer = getUserAnswer(firstNumber, secondNumber);
    const correctAnswer = gcd(firstNumber, secondNumber);

    if (!isAnswerCorrect(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
