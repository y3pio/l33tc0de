/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
  const seen = new Set();
  let result = '';

  for (let i=0; i<s.length; i++) {
    const c = s[i];
    if (!seen.has(c)) {
      result += c;
      seen.add(c)
    }
  }

  return result.length;
};