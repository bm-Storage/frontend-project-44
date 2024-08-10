import playGame from '../index.js';
import getRandomInt from '../gen-random.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const numMin = 1;
const numMax = 50;

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInt(numMin, numMax);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
