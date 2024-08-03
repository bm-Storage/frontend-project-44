import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomInt = () => {
  const max = 100;
  const randomInt = Math.floor(Math.random() * max);
  return randomInt;
};

export default () => {
  let roundCount = 3;
  for (let i = roundCount; i > 0; i -= 1) {
    const number = getRandomInt();
    console.log(`Question:${number}!`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Great!');
    roundCount -= 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
