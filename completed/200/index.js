/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;
  let islandCount = 0;

  const dfs = (i, j) => {
    const currentRow = grid[i];

    if (!currentRow) {
      return;
    }

    const current = currentRow[j];

    if (!current || current === '0') {
      return;
    }

    grid[i][j] = '0';

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
};