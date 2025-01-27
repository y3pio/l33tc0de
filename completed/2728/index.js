/**
 * Definition for a street.
 * class Street {
 *     @param {number[]} doors
 *     constructor(doors);
 *
 *     @return {void}
 *     openDoor();
 *
 *     @return {void}
 *     closeDoor();
 *
 *     @return {boolean}
 *     isDoorOpen();
 *
 *     @return {void}
 *     moveRight();
 *
 *     @return {void}
 *     moveLeft();
 * }
 */
/**
 * @param {Street} street
 * @param {number} k
 * @return {number}
 */
var houseCount = function(street, k) {
  let i = 0;

  // Reset all doors
  while (i < k) {
    street.closeDoor();
    street.moveRight();
    i++;
  }

  // Place a marker and move right
  street.openDoor();
  street.moveRight();

  // While we are not back at the marker, keep going
  let count = 1;
  while(!street.isDoorOpen()) {
    count++;
    street.moveRight();
  }

  return count;
};

