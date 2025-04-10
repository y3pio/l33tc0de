/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  const grid = Array.from({ length: 3 }, () => Array(3).fill(''));

  // Fill the grid based on moves
  for (let i = 0; i < moves.length; i++) {
    const [row, col] = moves[i];
    grid[row][col] = i % 2 === 0 ? 'X' : 'O'; // A plays 'X', B plays 'O'
  }

  // Check for a winner
  const checkWinner = (player) => {
    // Check rows and columns
    for (let i = 0; i < 3; i++) {
      if (grid[i].every(cell => cell === player)) return true; // Row
      if (grid.every(row => row[i] === player)) return true; // Column
    }
    // Check diagonals
    if (grid[0][0] === player && grid[1][1] === player && grid[2][2] === player) return true;
    if (grid[0][2] === player && grid[1][1] === player && grid[2][0] === player) return true;

    return false;
  };

  if (checkWinner('X')) return 'A';
  if (checkWinner('O')) return 'B';

  // Check if the game is still pending or a draw
  return moves.length === 9 ? 'Draw' : 'Pending';
};