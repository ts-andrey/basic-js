import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chains: [],
  getLength() {
    return this.chains.length;
  },
  addLink(value) {
    this.chains.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (typeof position === 'number' && position > 0 && position <= this.chains.length) {
      this.chains.splice(position - 1, 1);
      return this;
    } else {
      this.chains = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain() {
    this.chains = this.chains.reverse();
    return this;
  },
  finishChain() {
    let chain = '';
    for (let i = 0; i < this.chains.length; i++) {
      chain += `~~( ${this.chains[i]} )`;
    }
    this.chains = [];
    return chain.substring(2);
  },
};
