/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
  const stateMap = new Map();
  const safeNodes = new Set();

  graph.forEach((edges, i) => {
    if (edges.length === 0) {
      safeNodes.add(i)
    }
    stateMap.set(i, edges);
  })

  stateMap.forEach((edges, key) => {
    // If yourself is the terminal node, or every one of your edges is a terminal node
    if (safeNodes.has(key) || edges.every(n => safeNodes.has(n))) {
      safeNodes.add(key)
      return;
    }

    const traversedMap = new Set();
    const isNodeSafe = (node) => {

      if (safeNodes.has(node)) {
        return true;
      } else if (traversedMap.has(node)) {
        return false;
      }

      traversedMap.add(node)

      const edges = stateMap.get(node)
      if(edges.every(n => isNodeSafe(n))) {
        safeNodes.add(node)
        return true;
      }
    }

    if (isNodeSafe(key)) {
      safeNodes.add(key)
    }

  })



  return Array.from(safeNodes).sort((a,b) => a - b)
};