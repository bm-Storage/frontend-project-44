import askUserName from '../cli.js';
import {
  isAnswerCorrect, getRandomInt, maxRoundCount, getUserAnswer,
} from '../index.js';

export default () => {
  const userName = askUserName();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < maxRoundCount(); i += 1) {
    const progressionFirstItem = getRandomInt(0, 20);
    const progressionLength = getRandomInt(5, 10);
    const progressionStep = getRandomInt(2, 7);
    const hiddenPosition = getRandomInt(0, progressionLength - 1);

    let correctAnswer;
    let result = '';
    let lastItem = progressionFirstItem;
    for (let j = 0; j < progressionLength; j += 1) {
      if (j === hiddenPosition) {
        result = `${result} ${'..'}`;
        correctAnswer = lastItem;
        lastItem += progressionStep;
      } result = `${result} ${lastItem}`;
      lastItem += progressionStep;
    }
    const userAnswer = getUserAnswer(result.slice(1));

    if (!isAnswerCorrect(userAnswer, correctAnswer, userName)) {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
