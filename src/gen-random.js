const getRandomInt = (min, max) => {
  const rangeMin = Math.ceil(min);
  const rangeMax = Math.floor(max);
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
};

const randomProgressionOptions = () => {
  const progressionFirstItem = getRandomInt(0, 20);
  const progressionLength = getRandomInt(5, 10);
  const progressionStep = getRandomInt(2, 7);
  const hiddenSpot = getRandomInt(0, progressionLength - 1);

  return [progressionFirstItem, progressionLength, progressionStep, hiddenSpot];
};

export { getRandomInt, randomProgressionOptions };
