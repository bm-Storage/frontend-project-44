import playGame from '../index.js';
import { randomProgressionOptions } from '../gen-random.js';

const taskDescription = 'What number is missing in the progression?';

const getProgression = () => {
  const [firstItem, progressionLength, progressionStep, hiddenSpot] = randomProgressionOptions();
  let hiddenNumber;
  let result = '';
  let lastItem = firstItem;
  for (let i = 0; i < progressionLength; i += 1) {
    if (i === hiddenSpot) {
      result = `${result} ${'..'}`;
      hiddenNumber = lastItem;
      lastItem += progressionStep;
    } result = `${result} ${lastItem}`;
    lastItem += progressionStep;
  }
  const progression = result.trim();
  return [progression, hiddenNumber];
};

const getQuestionAndAnswer = () => {
  const [question, correctAnswer] = getProgression();
  return [question, correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
