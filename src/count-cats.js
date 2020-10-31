const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  const count = matrix.flat().filter(item => item === '^^');
  return count.length;
};
