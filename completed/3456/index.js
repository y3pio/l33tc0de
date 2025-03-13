/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const isValid = (candidate, s, i, k) => {
  const candidateArray = candidate.split('');
  const isSame = candidateArray.every(c => c === candidate[0]);
  return isSame && s[i-1] !== s[i] && s[i] !== s[i+k]
}

var hasSpecialSubstring = function(s, k) {
  for (let i=0; i<=s.length-k; i++) {
    let candidate = '';
    let j = i;
    while (candidate.length < k) {
      candidate += s[j];
      j++
    }


    if (isValid(candidate, s, i, k)) {
      return true
    }
  }

  return false;
};