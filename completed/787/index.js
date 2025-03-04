/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
  // Initialize distances array
  let dist = new Array(n).fill(Infinity);
  dist[src] = 0;

  // Perform relaxation up to k+1 times
  for (let i = 0; i <= k; i++) {
    // Create a copy of the current distances
    let tempDist = dist.slice();

    // Relax all edges
    for (let [from, to, price] of flights) {
      if (dist[from] !== Infinity && dist[from] + price < tempDist[to]) {
        tempDist[to] = dist[from] + price;
      }
    }

    // Update distances
    dist = tempDist;
  }

  // Return the result
  return dist[dst] === Infinity ? -1 : dist[dst];
};