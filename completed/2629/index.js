/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

  return function(x) {
    functions.reverse();
    return functions.reduce((res, f) => {
      return f(res);
    }, x)
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */