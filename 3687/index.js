/**
 * @param {number[]} daysLate
 * @return {number}
 */
var lateFee = function(daysLate) {
    return daysLate.reduce((fee, penalty) => {
        if (penalty === 1) {
            fee += 1;
        } else if (penalty >= 2 && penalty <= 5) {
            fee += 2 * penalty
        } else {
            fee += 3 * penalty
        }

        return fee;
    }, 0);
};
