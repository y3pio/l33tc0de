/**
 * @param {string[]} words
 * @return {string}
 */
const isPalindrome = (s) => {
  let l = 0;
  let r = s.length-1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return false
    }
    l++;
    r--;
  }

  return true;
}
var firstPalindrome = function(words) {
  for (let i=0; i<words.length; i++) {
    if (isPalindrome(words[i])) {
      return words[i];
    }
  }

  return "";
};