const t1 = 'L_RL__R' // Expect 3
const t2 = "_R__LL_" // expect 5
const t3 = "_______" // expect 7

// Linear scan for delta between left and right moves. Take abs of the difference and add free moves to it.
var furthestDistanceFromOrigin = function(moves) {
  let lCount = 0;
  let rCount = 0;
  let freeCount = 0;

  for(let i=0; i<moves.length; i++) {
    if (moves[i] === 'L') {
      lCount +=1;
    } else if (moves[i] === 'R') {
      rCount +=1;
    } else {
      freeCount += 1;
    }
  }

  return Math.abs(rCount - lCount) + freeCount;
};

