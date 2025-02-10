/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
  let maxTime = -Infinity;
  let maxButton = undefined;

  events.forEach((e, i) => {
    const button = e[0];
    const time = e[1];
    const diff = events[i-1] ? time - events[i-1][1] : time;
    if (diff > maxTime) {
      maxTime = diff;
      maxButton = button;
    } else if (diff === maxTime && button < maxButton) {
      maxButton = button;
    }
  });

  return maxButton;
};