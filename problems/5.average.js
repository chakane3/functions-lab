/**
 * Takes in two values and returns their rounded average
 * 
 * Hint: the way to get the average of a set of numbers is
 * to sum all the numbers then divide that sum by how many numbers 
 * you added
 *
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} - A whole number equal to the average of a and b
 */
function average(a, b) {
  var sum = a + b
  var rounded = Math.round(sum/2)
  return rounded
}

/**
 * Takes in three values and returns their rounded average
 * 
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @param {number} c - The third number
 * @returns {number} - A whole number equal to the average of a and b and c
 */
function averageThree(a, b, c) {
  let sum = a + b + c
  let average = Math.round(sum/3)
  return average
}


module.exports = {
  average,
  averageThree
};
