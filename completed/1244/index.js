
var Leaderboard = function() {
  this.scoreMap = new Map();
};

/**
 * @param {number} playerId
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
  if (this.scoreMap.has(playerId)) {
    this.scoreMap.set(playerId, this.scoreMap.get(playerId) + score)
  } else {
    this.scoreMap.set(playerId, score);
  }
};

/**
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
  const sortedScore = Array.from(this.scoreMap.values()).sort((a,b) => a - b);
  let count = 0;
  let sum = 0;
  while (count < K) {
    const currScore = sortedScore.pop();
    sum += currScore ? currScore : 0;
    count ++;
  }

  return sum;
};

/**
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
  this.scoreMap.set(playerId, 0);
};

/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */