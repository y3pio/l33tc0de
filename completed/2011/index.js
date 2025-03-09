/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
  let x = 0;
  operations.forEach(op => {
    if (op === '++X' || op === 'X++') {
      x++;
    } else {
      x--;
    }
  })

  return x;
};