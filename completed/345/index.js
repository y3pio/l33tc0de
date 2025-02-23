/**
 * @param {string} s
 * @return {string}
 */
const VOWELS = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
var reverseVowels = function(s) {
  const sArr = s.split('');
  // let vowelList = []

  // for (let i=0; i<sArr.length; i++) {
  //     const c = sArr[i];
  //     if (VOWELS.has(c)) {
  //         vowelList.push(c);
  //         sArr[i] = '*'
  //     }
  // }

  // for (let i=0; i<sArr.length; i++) {
  //     const c = sArr[i];
  //     if (c === '*') {
  //         const v = vowelList.pop();
  //         sArr[i] = v
  //     }
  // }
  let l=0;
  let r = sArr.length - 1;

  while (l < r) {
    if (!VOWELS.has(sArr[l])) {
      l++;
    }

    if (!VOWELS.has(sArr[r])) {
      r--;
    }

    if (VOWELS.has(sArr[l]) && VOWELS.has(sArr[r])) {
      // SWAP!
      const temp = sArr[l]
      sArr[l] = sArr[r]
      sArr[r] = temp
      l++;
      r--;
    }
  }

  return sArr.join('');
};