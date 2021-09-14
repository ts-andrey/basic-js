import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(bool = true) {
    this.direct = bool;
  }
  letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  encrypt(m, k) {
    if (!m || !k) throw new Error('Incorrect arguments!');
    const message = m.toUpperCase();
    const key = k.toUpperCase();
    const result = [];
    for (let i = 0, j = 0; i < message.length; i++) {
      if (this.letters.includes(message[i])) {
        const encIndex = (this.letters.indexOf(message[i]) + this.letters.indexOf(key[j])) % 26;
        result.push(this.letters[encIndex]);
        if (j === key.length - 1) j = 0;
        else j++;
      } else {
        result.push(message[i]);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
  decrypt(eM, k) {
    if (!eM || !k) throw new Error('Incorrect arguments!');
    const encMessage = eM.toUpperCase();
    const key = k.toUpperCase();
    const result = [];
    for (let i = 0, j = 0; i < encMessage.length; i++) {
      if (this.letters.includes(encMessage[i])) {
        const encIndex = (this.letters.indexOf(encMessage[i]) - this.letters.indexOf(key[j]) + 26) % 26;
        result.push(this.letters[encIndex]);
        if (j === key.length - 1) j = 0;
        else j++;
      } else {
        result.push(encMessage[i]);
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}
