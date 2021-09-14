import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const dnsCounter = {};
  for (let i = 0; i < domains.length; i++) {
    const temp = domains[i].split('.').reverse();
    let domain = '';
    for (let j = 0; j < temp.length; j++) {
      domain += `.${temp[j]}`;
      dnsCounter[domain] = (dnsCounter[domain] || 0) + 1;
    }
  }
  return dnsCounter;
}