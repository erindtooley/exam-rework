/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * @param {Number} min
 * @param {Number} max
 * @return {Number}
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum and minimum are inclusive
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
// This will generate a random array of 20 numbers from 60-100.
const testScores = Array.from({ length: 20 }, () => getRandomIntInclusive(60, 100));

const curvedScores = testScores.map(el => curveScore(el, 10));

// Generate a listing of the scores in the browser.
// Instantiate the table with the existing HTML <body> and the row with the <template>.
const template = document.querySelector('#score-row');

// We must use querySelectorAll (not querySelector()) to grab all of the <td>s into an array.
// It will only grab the first td it comes across if you don't add All.
const data = template.content.querySelectorAll('td');
console.log(data);
