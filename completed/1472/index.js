/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.history = new Array();
  this.currentIdx = 0;
  this.history.push(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  if (this.currentIdx === this.history.length - 1) {
    // At the end of the current history, just push
    this.history.push(url);
  } else {
    // Has navigated somewhere back, and we need to create a new history;
    const newHistory = this.history.slice(0, this.currentIdx + 1);
    newHistory.push(url);
    this.history = newHistory;
  }

  this.currentIdx++;

};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (steps <= this.currentIdx) {
    this.currentIdx -= steps;
    return this.history[this.currentIdx]
  } else {
    this.currentIdx = 0;
    return this.history[this.currentIdx];
  }
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.currentIdx + steps < this.history.length) {
    this.currentIdx += steps;
    return this.history[this.currentIdx]
  } else {
    this.currentIdx = this.history.length - 1;
    return this.history[this.currentIdx];
  }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */