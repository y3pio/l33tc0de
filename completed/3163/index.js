/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let count = 0;
  let char = undefined;
  let comp = '';

  word.split('').forEach(c => {
    if (!char) {
      char = c;
      count = 1;
    } else if (char === c) {
      count += 1;
      if (count === 9) {
        comp += `${count}${char}`;
        count = 0;
        char = undefined;
      }
    } else if (char !== c) {
      comp += `${count}${char}`;
      char = c;
      count = 1;
    }
  });

  if (char) {
    comp += `${count}${char}`;
  }


  return comp;
};