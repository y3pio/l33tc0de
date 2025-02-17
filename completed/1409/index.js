/**
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function(queries, m) {
  let P = []
  for (let i=1; i<=m; i++) {
    P.push(i)
  }

  const result = []
  queries.forEach(q => {
    const index = P.indexOf(q)
    result.push(index);
    const newArr = [q, ...P.slice(0, index), ...P.slice(index+1)];
    P = newArr;
  })

  return result;
};