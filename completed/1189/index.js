/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
  const balloonMap = new Map();
  const balloonCharacters = ['b', 'a', 'l', 'o', 'n'];
  balloonCharacters.forEach(c => {
    balloonMap.set(c, 0);
  })

  for (let i=0; i<text.length; i++) {
    const char = text[i];
    if (balloonCharacters.includes(char)) {
      balloonMap.set(char, balloonMap.get(char) + 1);
    }
  }

  balloonMap.set('l', Math.floor(balloonMap.get('l')/2))
  balloonMap.set('o', Math.floor(balloonMap.get('o')/2))
  let min = Infinity;

  balloonMap.forEach((val) => {
    min = Math.min(min, val);
  });

  return min;
};