/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    // Sort the potions array to enable binary search.
    potions.sort((a, b) => a - b);
    const m = potions.length;

    return spells.map(spell => {
        let left = 0;
        let right = m - 1;
        // This will store the index of the first potion that forms a successful pair.
        // Initialize to m, indicating no successful pair found yet.
        let firstSuccessIndex = m;

        while (left <= right) {
            const mid = Math.floor(left + (right - left) / 2);
            
            // If the product is successful, this potion might be our first valid one.
            // We record its index and search for a potentially smaller index to the left.
            if (spell * potions[mid] >= success) {
                firstSuccessIndex = mid;
                right = mid - 1;
            } else {
                // If the product is too small, we need a stronger potion.
                // Search in the right half of the array.
                left = mid + 1;
            }
        }
        
        // The number of successful pairs is the total number of potions
        // minus the index of the first successful one.
        return m - firstSuccessIndex;
    });
};
