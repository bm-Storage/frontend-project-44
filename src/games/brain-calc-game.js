import playGame from '../index.js';
import { getRandomInt } from '../gen-random.js';

const taskDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const expressionResult = (question) => {
  const [firstNumber, operator, secondNumber] = question.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = Number(firstNumber) + Number(secondNumber);
      break;
    case '-':
      result = Number(firstNumber) - Number(secondNumber);
      break;
    default:
      result = Number(firstNumber) * Number(secondNumber);
  }
  return result;
};

const getQuestionAndAnswer = () => {
  const question = `${getRandomInt(1, 30)} ${getRandomOperator()} ${getRandomInt(1, 30)}`;
  const correctAnswer = expressionResult(question);

  return [question, correctAnswer];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
