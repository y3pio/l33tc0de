/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
  const cArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const cMap = new Map();

  for (let i=0; i<cArr.length; i++) {
    if (i === cArr.length-1) {
      cMap.set('z', 'a')
    } else {
      cMap.set(cArr[i], cArr[i+1])
    }
  }

  let word = 'a'
  while (word.length < k) {
    let nextWord = '';
    for (let i=0; i<word.length; i++) {
      const nextChar = cMap.get(word[i])
      nextWord += nextChar;
    }

    word += nextWord;
  }

  return word[k-1]
};