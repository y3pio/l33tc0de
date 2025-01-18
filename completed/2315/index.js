/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
  let isInbetween = false;
  let count = 0;
  for (let i=0; i<s.length; i++) {
    if(!isInbetween && s[i] === '*') {
      count += 1;
    }

    if (s[i] === '|') {
      isInbetween = !isInbetween;
    }
  }

  return count;
};