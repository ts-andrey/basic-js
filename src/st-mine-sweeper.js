import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const temp = [];
    for (let j = 0; j < matrix[i].length; j++) {
      temp.push(0);
    }
    result.push(temp);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (i > 0) {
          if (result[i - 1][j - 1] !== undefined) result[i - 1][j - 1]++;
          if (result[i - 1][j] !== undefined) result[i - 1][j]++;
          if (result[i - 1][j + 1] !== undefined) result[i - 1][j + 1]++;
        }
        if (result[i][j - 1] !== undefined) result[i][j - 1]++;
        if (result[i][j + 1] !== undefined) result[i][j + 1]++;
        if (result[i + 1][j - 1] !== undefined) result[i + 1][j - 1]++;
        if (result[i + 1][j] !== undefined) result[i + 1][j]++;
        if (result[i + 1][j + 1] !== undefined) result[i + 1][j + 1]++;
      }
    }
  }

  return result;
}
