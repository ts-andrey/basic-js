import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
  const strArr = str.split('');
  let convStr = '';
  let counter = 1;
  for (let i = 0; i < strArr.length; i++) {
    const ch = strArr[i];
    if (strArr[i] === strArr[i + 1]) {
      counter++;
    } else {
      counter === 1 ? (convStr += `${ch}`) : (convStr += `${counter}${ch}`);
      counter = 1;
    }
  }

  return convStr;
}
