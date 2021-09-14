import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  const s1Counter = {};
  const s2Counter = {};
  let counter = 0;
  for (let i = 0; i < s1.length; i++) s1Counter[s1[i]] = (s1Counter[s1[i]] || 0) + 1;
  for (let i = 0; i < s2.length; i++) s2Counter[s2[i]] = (s2Counter[s2[i]] || 0) + 1;
  for (const [key, value] of Object.entries(s1Counter)) {
    if (key in s2Counter) {
      if (value < s2Counter[key]) counter += value;
      else counter += s2Counter[key];
    }
  }
  return counter;
}
