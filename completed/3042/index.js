/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
  const isPrefixAndSuffix = (str1, str2) => {
    return str2.indexOf(str1) === 0 && str2.lastIndexOf(str1) === str2.length - str1.length;
  }

  let count = 0;

  for(let i=0; i<words.length; i++) {
    for(let j=i+1; j<words.length; j++) {
      if (isPrefixAndSuffix(words[i], words[j])) {
        count++;
      }
    }
  }

  return count;
};