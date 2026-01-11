/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
  const seen = new Set();
  let count = 0;
  for (let i=0; i<s.length; i++) {
    const c = s[i];
    seen.add(c)
    if (seen.size === (i+1) % 3) {
      count++;
    }
  }

  return count;
};