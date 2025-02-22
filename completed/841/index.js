/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  const totalRooms = rooms.length;
  const visitedRooms = new Set();

  let roomsToUnlock = [...rooms[0]]
  visitedRooms.add(0)
  while (roomsToUnlock.length > 0) {
    const unlock = roomsToUnlock.pop();

    if (!visitedRooms.has(unlock)) {
      visitedRooms.add(unlock);
      const nextKeys = rooms[unlock]

      // DFS search
      roomsToUnlock = [...roomsToUnlock, ...nextKeys];
    }

    if (visitedRooms.size === totalRooms) {
      return true;
    }
  }

  return false;
};