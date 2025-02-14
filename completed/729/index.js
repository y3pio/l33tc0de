var MyCalendar = function() {
  this.timeSlots = new Map();
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
  let canBook = true;
  this.timeSlots.forEach((et, st) => {
    if (startTime >= st && startTime < et) {
      // Start time overlaps into an existing booking
      canBook = false;
    } else if (endTime > st && endTime <= et) {
      // End time overlaps into an existing booking
      canBook = false;
    } else if (startTime < st && endTime > et) {
      // There is a booking inside of our start - end time
      canBook = false;
    } else if (startTime > st && endTime <= et) {
      // Our booking is inside of an existing booking
      canBook = false;
    }
  });

  if (canBook) {
    this.timeSlots.set(startTime, endTime)
  }

  return canBook;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */