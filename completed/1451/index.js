/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  const textArr = text.toLowerCase().split(' ');

  textArr.sort((a,b) => a.length - b.length);

  const firstWord = textArr[0].split('')
  firstWord[0] = firstWord[0].toUpperCase();
  textArr[0] = firstWord.join('')

  return textArr.join(' ')
};
