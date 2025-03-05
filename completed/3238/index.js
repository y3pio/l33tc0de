/**
 * @param {number} n
 * @param {number[][]} pick
 * @return {number}
 */
var winningPlayerCount = function(n, pick) {
  const pickMap = new Map();

  pick.forEach(p => {
    const [player, ball] = p;
    if (pickMap.has(player)) {
      const ballMap = pickMap.get(player)
      if (ballMap.has(ball)) {
        ballMap.set(ball, ballMap.get(ball) + 1)
      } else {
        ballMap.set(ball, 1)
      }
      pickMap.set(player, ballMap)
    } else {
      const ballMap = new Map();
      ballMap.set(ball, 1)
      pickMap.set(player, ballMap)
    }
  })

  let result = 0;
  pickMap.forEach((ballMap, player) => {
    const ballArr = Array.from(ballMap);
    if (ballArr.some(b => b[1] >= player +1)) {
      result++;
    }
  })

  return result;
};