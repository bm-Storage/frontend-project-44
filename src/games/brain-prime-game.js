import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, maxRoundCount, getUserAnswer, isPrime,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const number = getRandomInt(2, 100);

    const userAnswer = getUserAnswer(number);
    const correctAnswer = isPrime(number) === true ? 'yes' : 'no';

    if (!isAnswerCorrect(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
