/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function(grid) {
  // Key = team, value = list of teams that are stronger than team Key
  const strongerThanMap = new Map();
  const n = grid.length;
  for (let i=0; i<n; i++) {
    strongerThanMap.set(i, []);
  }

  // Generate the map above.
  for(let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
      if (grid[i][j] === 1) {
        // i is stronger than j;
        const currentList = strongerThanMap.get(j)
        currentList.push(i);
        strongerThanMap.set(j, currentList);
      }
    }
  }

  // Go through all the map and find a team Key that has no teams stronger (empty list);
  let candidate = -1;
  strongerThanMap.forEach((list, team) => {
    if (list.length === 0) {
      candidate = team;
      return;
    }
  })

  return candidate;
};