const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let arr = s2.split('');
  for (let i = 0; i < s1.length; i += 1) {
    const index = arr.indexOf(s1[i]);
    if (index !== -1) {
      sum += 1;
      arr.splice(index, 1);
    }
  }
  return sum;
}

module.exports = {
  getCommonCharacterCount
};
