/**
 * @param {number} n
 * @return {boolean}
 */
var canAliceWin = function(n) {
  let alice = 10;
  let bob = 10
  let turn = 'alice'
  while (n > 0) {
    if (turn === 'alice') {
      if (n - alice < 0) {
        return false;
      } else {
        n -= alice;
        alice -= 1;
        bob -= 1;
        turn = 'bob'
      }
    } else if (turn === 'bob') {
      if (n - bob < 0) {
        return true;
      } else {
        n -= bob;
        alice -= 1;
        bob -= 1;
        turn = 'alice'
      }
    }
  }

  return turn === 'bob'
};