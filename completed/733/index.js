/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  const original = image[sr][sc];
  if (original === color) return image;

  const row = image.length;
  const col = image[0].length;

  const dfs = (i,j) => {
    if (i < 0 || i > row-1 || j < 0 || j > col-1) {
      return; // Out of bound;
    }

    if (image[i][j] !== original) {
      return;
    }

    image[i][j] = color;

    dfs(i+1,j);
    dfs(i,j+1);
    dfs(i-1,j);
    dfs(i,j-1);
  }

  dfs(sr, sc);

  return image;
};