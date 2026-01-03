/**
 * @param {number} n
 * @return {number}
 */
var sumOfBlocks = function(n) {
  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 7;
  }

  const mod = Math.pow(10,9) + 7;
  let res = 7;
  let block = 3;
  let base = 4;

  while(block <= n) {
    let curr = 1;
    let i=0
    while (i < block) {
      curr = (curr * base) % mod; // <-- Asked AI for help with this, wasn't clear from instructions we had to keep modding on every product.
      base++;
      i++;
    }

    res += curr;
    block++;
  }

  return res % mod;
};