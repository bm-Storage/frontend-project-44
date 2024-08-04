import readlineSync from 'readline-sync';

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

const gcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;
  if (a === 0) return b;
  if (b === 0) return a;
  if (a === b) {
    return a;
  }
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  return b;
};

const userAnswer = (...items) => {
  const condition = items.join(' ');
  console.log(`Question:${condition}!`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export {
  isAnswerCorrect, getRandomInt, getRandomOperator, maxRoundCount, gcd, userAnswer,
};
