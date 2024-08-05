import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, maxRoundCount, getUserAnswer,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const number = getRandomInt();

    const userAnswer = getUserAnswer(number);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (!isAnswerCorrect(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
