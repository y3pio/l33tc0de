/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
  let row1 = 'qwertyuiop';
  let row2 = 'asdfghjkl';
  let row3 = 'zxcvbnm';

  return words.filter(word => {
    const rowSet = new Set();
    for (let i=0; i<word.length; i++) {
      // For every char, check existance in rows 1-3
      const char = word[i].toLowerCase();
      if (row1.includes(char)) {
        rowSet.add(1)
      } else if (row2.includes(char)) {
        rowSet.add(2)
      } else if (row3.includes(char)) {
        rowSet.add(3);
      }

      if (rowSet.size > 1) {
        return false;
      }
    }

    return true;
  })
};