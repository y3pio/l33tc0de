/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
  const freq = new Map();

  // Count character frequencies
  for (const char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let oddChar = '';
  const half = [];

  // Process frequencies
  for (const [char, count] of [...freq.entries()].sort()) {
    if (count % 2 !== 0) {
      if (oddChar) return ''; // More than one odd character, not possible
      oddChar = char;
    }
    half.push(char.repeat(Math.floor(count / 2)));
  }

  // Build the palindrome
  const firstHalf = half.join('');
  const secondHalf = firstHalf.split('').reverse().join('');
  return firstHalf + oddChar + secondHalf;
};