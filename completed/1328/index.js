/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
  if (palindrome.length <= 1) {
    return '';
  } else if (palindrome.length === 2) {
    if (palindrome[0] === 'a') {
      return 'ab'
    } else {
      return `${a}${palindrome[1]}`
    }
  } else {
    let index = -1;
    for (let i=0; i<palindrome.length; i++) {
      if (index === -1 && palindrome[i] !== 'a' && i !== Math.floor(palindrome.length/2)) {
        index = i;
      }
    }


    const pArr = palindrome.split('');
    if (index === -1) {
      pArr.pop();
      pArr.push('b');
    } else {
      pArr[index] = 'a'
    }

    return pArr.join('');
  }
};
