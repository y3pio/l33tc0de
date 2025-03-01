/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
  let sum1 = 0;
  let sum2 = 0;

  for (let i=0; i<player1.length; i++) {
    let p1 = player1[i];
    if (player1[i-1] === 10 || player1[i-2] === 10) {
      p1 = p1 * 2;
    }
    sum1 += p1;

    let p2 = player2[i];
    if (player2[i-1] === 10 || player2[i-2] === 10) {
      p2 = p2 * 2;
    }
    sum2 += p2;
  }

  if (sum1 === sum2) {
    return 0
  }

  return sum1 > sum2 ? 1 : 2;
};