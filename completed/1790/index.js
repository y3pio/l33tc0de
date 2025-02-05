/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
  const diffIndex = [];

  for (let i=0; i<s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diffIndex.push(i);
    }
  }

  if (diffIndex.length > 2) {
    return false;
  }

  return s1[diffIndex[0]] === s2[diffIndex[1]] && s1[diffIndex[1]] === s2[diffIndex[0]]
};
