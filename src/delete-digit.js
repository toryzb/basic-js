const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    let newArr = arr.slice();
    newArr.splice(i, 1);
    result.push(Number(newArr.join('')));
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
