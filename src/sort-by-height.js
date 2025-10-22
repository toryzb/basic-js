const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrSort = arr.filter(item => item !== -1).sort((a, b) => a - b);
  const result = arr.map(value => {
    if (value === -1) {
      return -1;
    } else {
      return arrSort.shift();
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
