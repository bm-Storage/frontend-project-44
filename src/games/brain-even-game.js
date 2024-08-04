import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, maxRoundCount, userAnswer,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const number = getRandomInt();

    const answer = userAnswer(number);

    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (!isAnswerCorrect(answer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
