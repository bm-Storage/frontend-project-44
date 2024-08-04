// const answerResult = (answer, correctAnswer, userName) => {
//   if (answer.toString() !== correctAnswer.toString()) {
//     console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
//     console.log(`Let's try again, ${userName}!`);
//     return false;
//   }
//   console.log('Great!');
//   return true;
// };

const isAnswerCorrect = (answer, correctAnswer, userName) => {
  if (answer.toString() === correctAnswer.toString()) {
    console.log('Great!');
    return true;
  }
  console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const getRandomInt = () => {
  const max = 30;
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const maxRoundCount = () => {
  const maxRound = 3;
  return maxRound;
};

export {
  isAnswerCorrect, getRandomInt, getRandomOperator, maxRoundCount,
};
