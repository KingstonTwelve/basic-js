const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  if (!arr.length) {
    return arr;
  }
  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < arr.length - 1) {
          i++;
        }
        break;

      case '--discard-prev':
        if (i >= 1 && (arr[i - 2] != '--discard-next')) {
          transformArr.splice(-1, 1);
        }
        break;

      case '--double-next':
        if (i < arr.length - 1) {
          transformArr.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (i >= 1 && (arr[i - 2] != '--discard-next')) {
          transformArr.push(arr[i - 1]);
        }
        break;

      default:
        transformArr.push(arr[i]);
    }
  }
  return transformArr;
};