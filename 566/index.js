console.clear();

// const mat = [[1,2],[3,4], [5,6], [7,8]];
// const r = 2;
// const c = 4;

const mat = [[1,2],[3,4]];
const r = 1;
const c = 4;

var matrixReshape = function(mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;
  if (m*n !== r*c) {
    return mat;
  }

  // Flatten
  const flatMat = mat.reduce((acc, e) => {
    e.forEach(i => {
      acc.push(i)
    })

    return acc;
  }, [])


  const result = [];
  let currRow = [];
  flatMat.forEach(i => {
    if(currRow.length < c) {
      currRow.push(i)
    } else {
      result.push(Array.from(currRow));
      currRow = [i];
    }
  })

  if (currRow.length > 0) {
    result.push(currRow)
  }

  return result;
};

console.log(matrixReshape(mat,r,c));