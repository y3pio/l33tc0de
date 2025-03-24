/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function(blocks, k) {
  let l=0;
  let r=0;
  let w=0;

  let min = Infinity;

  for(r; r<k; r++) {
    if (blocks[r] === 'W') {
      w++;
    }
  }

  min = Math.min(min, w);

  while(r < blocks.length) {
    if (blocks[l] === 'W') {
      w--;
    }
    l++;

    if (blocks[r] === 'W') {
      w++;
    }
    r++;
    min = Math.min(min, w);
  }

  min = Math.min(min, w);
  return min;
};