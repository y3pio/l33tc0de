/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
  const result = [];
  let flag = true;

  grid.forEach((row, i) => {
    if (i % 2 === 1) {
      row = row.reverse();
    }
    row.forEach(col => {
      if (flag) {
        result.push(col);

      }

      flag = !flag;
    })
  })

  return result;
};