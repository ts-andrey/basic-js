import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  const stringArr = `${n}`.split('');
  let index;
  for (let i = 0; i < stringArr.length - 2; i++) {
    if (+stringArr[i] <= +stringArr[i + 1]) index = i;
    else index = i + 1;
  }
  if (stringArr.length === 2) {
    if (+stringArr[0] <= +stringArr[1]) index = 0;
    else index = 1;
  }
  stringArr.splice(index, 1);
  return +stringArr.join('');
}
