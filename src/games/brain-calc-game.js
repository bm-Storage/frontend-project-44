import playGame from '../index.js';
import getRandomInt from '../gen-random.js';

const taskDescription = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const getExpressionResult = (question) => {
  const [firstNumber, operator, secondNumber] = question;
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Invalid operator: '${operator}'. Valid operators are: +, -, *.`);
  }
};

const getQuestionAndAnswer = () => {
  const question = [getRandomInt(), getRandomOperator(), getRandomInt()];
  const correctAnswer = getExpressionResult(question);
  return [question.join(' '), String(correctAnswer)];
};

export default () => {
  playGame(taskDescription, getQuestionAndAnswer);
};
