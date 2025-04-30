/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */

const convertToNum = (c) => {
  const chars = ['a','b','c','d','e','f','g','h'];
  return chars.indexOf(c);
}

var checkTwoChessboards = function(coordinate1, coordinate2) {
  const board = [
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
    [0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0],
  ]

  const [x1,y1] = coordinate1.split('');
  const [x2,y2] = coordinate2.split('');

  return board[convertToNum(x1)][parseInt(y1)-1] === board[convertToNum(x2)][parseInt(y2)-1]
};