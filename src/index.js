import readlineSync from 'readline-sync';

const getUserAnswer = (...items) => {
  const condition = items.join(' ');
  console.log(`Question: ${condition}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isAnswerCorrect = (userAnswer, correctAnswer, userName) => {
  if (userAnswer.toString() === correctAnswer.toString()) {
    console.log('Great!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

const getRandomInt = (min = 0, max = 30) => {
  const rangeMin = Math.ceil(min);
  const rangeMax = Math.floor(max);
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
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

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

export {
  isAnswerCorrect, getRandomInt, getRandomOperator, maxRoundCount, gcd, getUserAnswer, isPrime,
};
