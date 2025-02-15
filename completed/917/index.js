/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
  const sArr = s.split('');

  let l = 0;
  let r = sArr.length;

  while (l < r) {
    const leftC = sArr[l];
    const rightC = sArr[r];

    if (leftC && leftC.match(/[a-zA-Z]/) && rightC && rightC.match(/[a-zA-Z]/)) {
      // Swap these two letters
      sArr[l] = rightC;
      sArr[r] = leftC;
      l++;
      r--;
    } else if (!leftC.match(/[a-zA-Z]/)) {
      l++;
    } else {
      r--;
    }
  }

  return sArr.join('')
};