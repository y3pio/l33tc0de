/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  const destMap = new Map();

  paths.forEach(p => {
    const [src, dest] = p;
    if (destMap.has(src)) {
      const srcList = destMap.get(src);
      srcList.add(dest);
      destMap.set(src, srcList)
    } else {
      destMap.set(src, new Set([dest]))
    }

    if (!destMap.has(dest)) {
      destMap.set(dest, new Set())
    }
  })

  const results = Array.from(destMap);

  for (let i=0; i<results.length; i++) {
    if (results[i][1].size === 0) {
      return results[i][0]
    }
  }
};