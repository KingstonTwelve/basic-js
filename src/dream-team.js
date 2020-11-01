const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let dreamTeam = [];
  for (let name of members) {
    if (typeof name === 'string') {
      dreamTeam.push(name.trim()[0].toUpperCase());
    }
  }
  return dreamTeam.sort().join('');
};
