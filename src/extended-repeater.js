const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = options.addition !== undefined ? options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  if (typeof addition !== 'string') {
    addition = String(addition);
  }
  
  let additionString = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  
  let fullString = str + additionString;

  return new Array(repeatTimes).fill(fullString).join(separator);
}

module.exports = {
  repeater
};
