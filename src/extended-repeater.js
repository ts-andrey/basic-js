import { NotImplementedError } from '../extensions/index.js';

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
export default function repeater(str, options) {
  let finalString = '';
  let result = str;
  if ('addition' in options) {
    result += `${options['addition']}`;
    if ('additionRepeatTimes' in options) {
      if ('additionSeparator' in options) {
        for (let i = 1; i < options['additionRepeatTimes']; i++) {
          result += `${options['additionSeparator']}${options['addition']}`;
        }
      } else {
        for (let i = 1; i < options['additionRepeatTimes']; i++) {
          result += `|${options['addition']}`;
        }
      }
    } else {
    }
  }
  if ('repeatTimes' in options) {
    if ('separator' in options) {
      finalString = result;
      for (let i = 1; i < options['repeatTimes']; i++) {
        finalString += `${options['separator']}${result}`;
      }
    } else {
      finalString = result;
      for (let i = 1; i < options['repeatTimes']; i++) {
        finalString += `+${result}`;
      }
    }
  } else finalString = result;
  return finalString;
}
