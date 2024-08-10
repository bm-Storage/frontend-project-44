import playGame from '../index.js';
import getRandomInt from '../gen-random.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';
const numMin = 1;
const numMax = 100;

const getGreatestCommonDivisor = (question) => {
  const [firstNumber, secondNumber] = question;
  let a = firstNumber;
  let b = secondNumber;
  if (a === 0) return b;
  if (b === 0 || a === b) return a;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getQuestionAndAnswer = () => {
  const question = [getRandomInt(numMin, numMax), getRandomInt(numMin, numMax)];
  const correctAnswer = getGreatestCommonDivisor(question);

  return [question.join(' '), String(correctAnswer)];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
