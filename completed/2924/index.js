/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
  // team map to track stronger than.
  // Key = team, Value = other teams that are stronger than tem.
  const teamMap = new Map();

  for(let i=0; i<n; i++) {
    teamMap.set(i, []);
  }

  edges.forEach(edge => {
    const strongerTeam = edge[0];
    const weakerTeam = edge[1];
    const currentList = teamMap.get(weakerTeam);

    currentList.push(strongerTeam);
    teamMap.set(weakerTeam, currentList);
  });

  let candidates = [];

  teamMap.forEach((val, key) => {
    if (val.length === 0) {
      candidates.push(key);
    }
  });

  return candidates.length > 1 ? -1 : candidates[0];
};