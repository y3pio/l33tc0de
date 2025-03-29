/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  const triangle = [[1], [1,1]];

  if (rowIndex < 2) {
    return triangle[rowIndex];
  }

  let i = 2
  while(i <= rowIndex) {
    const prevRow = triangle[i-1];
    const currentRow = [];
    for (let j=0; j<=i; j++) {
      const left = prevRow[j-1] || 0;
      const right = prevRow[j] || 0;
      currentRow.push(left + right);
    }
    triangle.push(currentRow);
    i++;
  }

  return triangle[rowIndex];
};