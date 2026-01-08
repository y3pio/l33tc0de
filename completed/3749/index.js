/**
 * @param {string} expression
 * @return {number}
 */
var evaluateExpression = function(expression) {
  let index = 0;

  function parse() {
    // Check if we're at a number (including negative)
    if (expression[index] === '-' || !isNaN(expression[index])) {
      let numStr = '';
      if (expression[index] === '-') {
        numStr += '-';
        index++;
      }
      while (index < expression.length && !isNaN(expression[index])) {
        numStr += expression[index];
        index++;
      }
      return parseInt(numStr);
    }

    // Parse operator name
    let op = '';
    while (expression[index] !== '(') {
      op += expression[index];
      index++;
    }
    index++; // Skip '('

    // Parse first argument
    const leftVal = parse();
    index++; // Skip ','

    // Parse second argument
    const rightVal = parse();
    index++; // Skip ')'

    // Apply operation
    switch (op) {
      case 'add': return leftVal + rightVal;
      case 'sub': return leftVal - rightVal;
      case 'mul': return leftVal * rightVal;
      case 'div': return Math.floor(leftVal / rightVal);
      default: return 0;
    }
  }

  return parse();
};