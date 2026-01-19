/**
 * @param {string} s
 * @return {number}
 */

const vowels = 'aeiou';
const consonants = 'bcdfghjklmnpqrstvwxyz'
var vowelConsonantScore = function(s) {
  let c = 0;
  let v = 0;

  for (char of s) {
    if (vowels.includes(char)) {
      v++;
    } else if (consonants.includes(char)) {
      c++;
    }
  }

  return c === 0 ? c : Math.floor(v/c);
};