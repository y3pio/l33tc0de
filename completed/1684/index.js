/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const allowedSet = new Set();
  for (let i=0; i<allowed.length; i++) {
    allowedSet.add(allowed[i]);
  }

  let result = 0;
  words.forEach(word => {
    if (word.split('').every(c => allowedSet.has(c))) {
      result += 1;
    }
  })

  return result;
};