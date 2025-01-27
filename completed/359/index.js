const RATE_LIMIT = 10;

var Logger = function() {
  this.eventMap = new Map();
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
  if (!this.eventMap.has(message)) {
    this.eventMap.set(message, timestamp + RATE_LIMIT)
    return true;
  }

  const prevTimestamp = this.eventMap.get(message);

  if (timestamp >= prevTimestamp) {
    this.eventMap.set(message, timestamp + RATE_LIMIT)
    return true;
  }

  // Limit this message.
  return false;
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */