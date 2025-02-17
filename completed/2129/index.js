/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
  return title
    .split(' ')
    .map(word => {
      if (word.length < 3) {
        return word.toLowerCase();
      }

      let newWord = word.toLowerCase();
      newWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
      return newWord;
    })
    .join(' ');

};