/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function(year, month) {
  const d1 = new Date(`${year}-${month}-01`);
  let newMonth = month;
  let newYear = year;
  if (month === 12) {
    newMonth = 1;
    newYear = year + 1;
  } else {
    newMonth++;
  }

  const d2 = new Date(`${newYear}-${newMonth}-01`);

  const timeDiff = Math.abs(d2.getTime() - d1.getTime());
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};