import playGame from '../index.js';
import { getRandomInt } from '../gen-random.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (question) => {
  const [firstNumber, secondNumber] = question.split(' ').map(Number);
  let a = firstNumber;
  let b = secondNumber;
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) return a;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return b;
};

const getQuestionAndAnswer = () => {
  const question = `${getRandomInt(1, 100)} ${getRandomInt(1, 100)}`;
  const correctAnswer = getGreatestCommonDivisor(question);

  return [question, correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
