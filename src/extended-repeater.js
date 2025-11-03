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
  // Remove line below and write your code here
	str = String(str);

  let additionString = '';
  if (options.addition !== undefined) {
    const addition = String(options.addition);
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';

    additionString = Array(additionRepeatTimes)
      .fill(addition)
      .join(additionSeparator);
  }

  const mainString = str + additionString;
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';

  return Array(repeatTimes)
    .fill(mainString)
    .join(separator);
}

module.exports = {
  repeater
};
