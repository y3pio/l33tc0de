/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.max = capacity;
  this.cache = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (!this.cache.has(key)) {
    return -1;
  } else {
    const data = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, data);
    return data;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
    this.cache.set(key, value);
  } else {
    // Check for size and evict accordingly.
    if (this.cache.size === this.max) {
      this.cache.delete(this.cache.keys().next().value);
    }

    this.cache.set(key, value)
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */