/**
 * @param {string} sentence
 * @return {number}
 */
const alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
const digits = ['0','1','2','3','4','5','6','7','8','9']
const puncMarks = ['!', '.', ',']

const isValid = (word => {
  let hyphenCount = 0;
  let puncCount = 0;

  for (let i=0; i<word.length; i++) {
    const char = word[i];

    if (hyphenCount > 1 || puncCount > 1) {
      return false;
    }

    if (digits.includes(char)) {
      return false;
    }

    if ((i === 0 || i === word.length - 1) && char === '-') {
      return false;
    }

    if (char === '-' && (!alpha.includes(word[i-1]) || !alpha.includes(word[i+1]))) {
      return false;
    }

    if (puncMarks.includes(char) && i < word.length - 1) {
      return false;
    }

    if (char === '-') {
      hyphenCount++;
    } else if (char === '!') {
      puncCount++;
    }
  }

  return true;
})

var countValidWords = function(sentence) {
  const words = sentence.split(' ').filter(word => word.length > 0);

  return words.reduce((count, word) => {
    if (isValid(word)) {
      count ++;
    }

    return count;
  }, 0)
};