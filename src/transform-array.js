const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '--discard-next') {
      if (i + 1 < arr.length) {
        i += 1;
      }
    }
    else if (arr[i] === '--discard-prev') {
      if (result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.pop();
      }
    }
    else if (arr[i] === '--double-next') {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (i - 1 >= 0 && result.length > 0 && arr[i - 2] !== '--discard-next') {
        result.push(result[result.length - 1]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
