/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
  const seen = new Set();
  for (let i=0; i<s.length; i++) {
    const c = s[i];
    if (seen.has(c)) {
      return c;
    } else {
      seen.add(c)
    }
  }
};