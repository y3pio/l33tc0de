/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  if (k <= numOnes) {
    return k
  } else if (k > numOnes && k <= numOnes + numZeros) {
    return numOnes
  } else {
    // We need to account for how much numZeros we need to take;
    const delta = k - numOnes - numZeros;
    return numOnes - delta;
  }
};