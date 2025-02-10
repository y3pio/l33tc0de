/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
  const charMap = new Map();
  const totalWords = words.length;
  if (totalWords <= 1) {
    return true;
  }

  words.forEach(word => {
    for (let i=0; i<word.length; i++) {
      const char = word[i];
      if (charMap.has(char)) {
        charMap.set(char, charMap.get(char) + 1);
      } else {
        charMap.set(char, 1);
      }
    }
  })

  return Array.from(charMap.values()).every(e => e % totalWords === 0);
};