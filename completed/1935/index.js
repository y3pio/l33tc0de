/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
const canWriteWord = (word, brokenLetterArr) => {
  for (let i=0; i<brokenLetterArr.length; i++) {
    if (word.includes(brokenLetterArr[i])) {
      return false;
    }
  }
  return true;
}

var canBeTypedWords = function(text, brokenLetters) {
  const textArr = text.split(' ');
  const brokenLettersArr = brokenLetters.split('');

  const validWords = textArr.filter(word => canWriteWord(word, brokenLettersArr))

  return validWords.length;
};