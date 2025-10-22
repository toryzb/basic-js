const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let res = '';
  let sum = 1;
  for (let i = 1; i <= str.length; i += 1) {
    if (str[i - 1] === str[i]) {
      sum += 1;
    } else {
      res += (sum > 1 ? sum : '') + str[i - 1];
      sum = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
