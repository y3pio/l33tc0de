/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  const scores = [];

  for(const c of operations) {
    if (parseInt(c)) {
      scores.push(parseInt(c))
    } else if (c === '+') {
      const n1 = scores[scores.length-1] || 0
      const n2 = scores[scores.length-2] || 0
      scores.push(n1 + n2)
    } else if (c === 'D') {
      const n1 = scores[scores.length-1] || 0
      scores.push(n1 * 2)
    } else if (c === 'C') {
      scores.pop();
    }
  }

  return scores.reduce((sum, n) => sum + n, 0)
};