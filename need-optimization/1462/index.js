/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  const graph = {};
  for (let i=0; i<numCourses; i++) {
    graph[i] = [];
  }

  prerequisites.forEach(p => {
    const src = p[0];
    const dest = p[1];

    const currentDest = graph[src];
    graph[src] = [...currentDest, dest];
  })

  return queries.map(q => {
    const src = q[0];
    const dest = q[1];

    let traversal = graph[src];

    while(traversal.length > 0) {
      if (traversal.includes(dest)) {
        return true;
      } else {
        const node = traversal.pop();
        const newNodes = graph[node];
        // Filtering for uniques.
        traversal = [...new Set([...traversal, ...newNodes])]
      }
    }

    return false;
  })
};