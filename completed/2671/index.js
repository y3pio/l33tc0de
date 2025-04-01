
var FrequencyTracker = function() {
  this.numCount = new Map();
  this.freqCount = new Map();
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.add = function(number) {
  const currentCount = this.numCount.get(number) || 0;
  const newCount = currentCount + 1;
  this.numCount.set(number, newCount);

  if (currentCount > 0) {
    this.freqCount.set(currentCount, this.freqCount.get(currentCount) - 1);
  }
  this.freqCount.set(newCount, (this.freqCount.get(newCount) || 0) + 1);
};

/**
 * @param {number} number
 * @return {void}
 */
FrequencyTracker.prototype.deleteOne = function(number) {
  const currentCount = this.numCount.get(number);
  if (!currentCount) return;

  const newCount = currentCount - 1;
  this.numCount.set(number, newCount);

  this.freqCount.set(currentCount, this.freqCount.get(currentCount) - 1);
  if (newCount > 0) {
    this.freqCount.set(newCount, (this.freqCount.get(newCount) || 0) + 1);
  }
};

/**
 * @param {number} frequency
 * @return {boolean}
 */
FrequencyTracker.prototype.hasFrequency = function(frequency) {
  return (this.freqCount.get(frequency) || 0) > 0;
};

/**
 * Your FrequencyTracker object will be instantiated and called as such:
 * var obj = new FrequencyTracker()
 * obj.add(number)
 * obj.deleteOne(number)
 * var param_3 = obj.hasFrequency(frequency)
 */