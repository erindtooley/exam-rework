/*
# Exam Re-work
3. Generating a listing of the scores in the browser.
*/

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

/**
 * Add a specified amount to curve a score
 * @param {Number} original
 * @param {Number} curveAmount - amount to add for curve
 * @return {Number}
 */
function curveScore(original, curveAmount) {
  return original + curveAmount;
}

const testScores = Array.from({ length: 20 }, () => getRandomIntInclusive(60, 100));

testScores.forEach((el, i, curvedScores) => {
  curvedScores[i] = curveScore(el, 10);
});
