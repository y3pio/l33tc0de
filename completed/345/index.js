/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
var reverseVowels = function(s) {
  const sArr = s.split('');
  let vowelList = []

  for (let i=0; i<sArr.length; i++) {
    const c = sArr[i];
    if (VOWELS.includes(c)) {
      vowelList.push(c);
      sArr[i] = '*'
    }
  }

  for (let i=0; i<sArr.length; i++) {
    const c = sArr[i];
    if (c === '*') {
      const v = vowelList.pop();
      sArr[i] = v
    }
  }

  return sArr.join('');
};