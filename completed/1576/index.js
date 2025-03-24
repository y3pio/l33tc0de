/**
 * @param {string} s
 * @return {string}
 */

var modifyString = function(s) {
  // 97 = a, 122 = z
  let fill = 97
  const sArr = s.split('');
  for (let i=0; i<sArr.length; i++) {
    const c = s[i];
    if (c === "?") {
      let candidate = String.fromCharCode(fill);
      while(sArr[i-1] === candidate || sArr[i+1] === candidate) {
        fill++;
        if (fill >= 123) {
          fill = 97
        }

        candidate = String.fromCharCode(fill);
      }
      sArr[i] = candidate;
    }
  }

  return sArr.join('');
};