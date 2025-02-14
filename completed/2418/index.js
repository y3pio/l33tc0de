/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const heightMap = new Map();
  heights.forEach((height, i) => {
    heightMap.set(height, names[i])
  });

  heights.sort((a,b) => b - a)
  return heights.map(h => heightMap.get(h));
};