const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
      return 'Unable to determine the time of year!';
    }
    
    if (isNaN(Date.parse(date))) {
      throw new Error('Invalid date!');
    }

    try {
      date.getUTCSeconds();
    } catch {
      throw new Error('Invalid date!');
    }

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    if (day < 1 || day > 31 || month < 0 || month > 11 || year < 0) {
      throw new Error('Invalid date!');
    }
    if (month === 0 || month === 1 || month === 11) {
      return 'winter';
    }
    if (month >= 2 && month <= 4) {
      return 'spring';
    }
    if (month >= 5 && month <= 7) {
      return 'summer';
    }
    if (month >= 8 && month <= 10) {
      return 'autumn';
    }
    return 'Invalid date!';
}

module.exports = {
  getSeason
};
