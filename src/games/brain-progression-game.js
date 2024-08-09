import playGame from '../index.js';
import getRandomInt from '../gen-random.js';

const taskDescription = 'What number is missing in the progression?';

const getProgression = (start, length, step) => {
  const result = [];
  for (let i = start; result.length <= length; i += step) {
    result.push(i);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const progressionLengthMin = 5;
  const progressionLengthMax = 10;
  const progressionStepMin = 2;
  const progressionStepMax = 7;
  const progressionStartMin = 5;
  const progressionStartMax = 10;
  const hiddenItemMin = 0;

  const progressionStart = getRandomInt(progressionStartMin, progressionStartMax);
  const progressionLength = getRandomInt(progressionLengthMin, progressionLengthMax);
  const progressionStep = getRandomInt(progressionStepMin, progressionStepMax);
  const hiddenItem = getRandomInt(hiddenItemMin, progressionLength - 1);

  const question = getProgression(progressionStart, progressionLength, progressionStep);
  const correctAnswer = question[hiddenItem];
  question[hiddenItem] = '..';
  return [question.join(' '), correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
