/**
 * @param {string} s
 * @return {number}
 */
var countLetters = function(s) {
  let count = 0;
  let i = 0;

  while (i < s.length) {
    let j = i;
    // Count the length of the group of identical characters
    while (j < s.length && s[j] === s[i]) {
      j++;
    }
    let groupLength = j - i;
    // Add the number of substrings for this group
    count += (groupLength * (groupLength + 1)) / 2;
    // Move to the next group
    i = j;
  }

  return count;
};