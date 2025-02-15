/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function(sentence, searchWord) {
  const words = sentence.split(' ')
  for (let i=0; i<words.length; i++) {
    const currentWord = words[i];
    if (currentWord.indexOf(searchWord) === 0) {
      return i+1
    }
  }

  return -1
};