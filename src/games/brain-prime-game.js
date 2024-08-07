import playGame from '../index.js';
import { getRandomInt } from '../gen-random.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
