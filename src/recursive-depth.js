import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

export default class DepthCalculator {
  calculateDepth(arr) {
    let tempCounter = 0;
    let finalCounter = 0;
    const array = [];

    const checkElement = (el, counter) => {
      if (Array.isArray(el)) {
        counter++;
        for (let i = 0; i < el.length; i++) {
          if (Array.isArray(el[i])) {
            checkElement(el[i], counter);
          }
        }
      }
      if (counter > tempCounter) tempCounter = counter;
    };

    if (Array.isArray(arr)) {
      finalCounter++;
      for (let i = 0; i < arr.length; i++) {
        tempCounter = 0;
        checkElement(arr[i], tempCounter);
        array.push(tempCounter);
      }
      return finalCounter + array.sort((a, b) => a - b).pop();
    }
  }
}