/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
  const reversedS = s.split('').reverse().join('')

  for (let i=0; i<s.length-1; i++) {
    const curr = `${s[i]}${s[i+1]}`;
    if (reversedS.includes(curr)) {
      return true;
    }
  }

  return false;
};