/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

var isSumEqual = function(firstWord, secondWord, targetWord) {
  let n1 = '';
  let n2 = '';
  let target = '';
  for(const c of firstWord) {
    n1 += c.charCodeAt(0)-97
  }

  for(const c of secondWord) {
    n2 += c.charCodeAt(0)-97
  }

  for(const c of targetWord) {
    target += c.charCodeAt(0)-97
  }

  n1 = parseInt(n1);
  n2 = parseInt(n2);
  target = parseInt(target);

  return n1 + n2 === target;

};