/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
  const fiveMap = new Map();

  items.forEach(item => {
    const [id, score] = item;
    if (fiveMap.has(id)) {
      const currentScores = fiveMap.get(id);
      currentScores.push(score);
      fiveMap.set(id, currentScores);
    } else {
      fiveMap.set(id, [score])
    }
  });

  const ids = Array.from(fiveMap.keys());
  ids.sort((a,b) => a-b)
  const result = [];
  ids.forEach(id => {
    const scores = fiveMap.get(id);
    scores.sort((a,b) => b-a);
    let total = 0;
    for(let i=0; i<5; i++) {
      total += scores[i] || 0;
    }

    result.push([id, parseInt(total/5)])
  })

  return result;
};