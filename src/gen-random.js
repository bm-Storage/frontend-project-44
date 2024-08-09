export default (min = 1, max = 30) => {
  const rangeMin = Math.ceil(min);
  const rangeMax = Math.floor(max);
  return Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;
};
