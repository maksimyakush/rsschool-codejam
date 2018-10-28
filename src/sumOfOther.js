const sumOfAllElements = arr => arr.reduce((acc, item) => acc + item, 0);
const sumOfOther = arr => arr.reduce((acc, item) => [...acc, sumOfAllElements(arr) - item], []);
module.exports = sumOfOther;
