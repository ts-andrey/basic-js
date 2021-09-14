import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  const indexes = [];
  const workArray = [...arr];
  workArray.forEach((el, num) => {
    if (el === -1) indexes.push(num);
  });
  workArray.sort((a, b) => a - b);
  workArray.splice(0, indexes.length);
  while (indexes.length !== 0) {
    workArray.splice(indexes[0], 0, -1);
    indexes.splice(0, 1);
  }
  return workArray ;
}
