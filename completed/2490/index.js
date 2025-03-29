/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function(sentence) {
  if(sentence[0] !== sentence[sentence.length-1]) {
    return false;
  }

  const sentenceArray = sentence.split(' ');
  for (let i=0; i<sentenceArray.length-1; i++) {
    const firstWord = sentenceArray[i];
    const nextWord = sentenceArray[i+1];

    if(firstWord[firstWord.length-1] !== nextWord[0]) {
      return false;
    }
  }

  return true;
};