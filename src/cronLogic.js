const { v4: uuidv4 } = require('uuid');

function getRandomUsers(numOfRandomsInTime) {
  const randoms = [];
  for (let i = 0; i < numOfRandomsInTime; i++) {
    randoms.push(uuidv4());
  }
  return randoms;
}

function computeJobWithLimitedRandoms(cronTime, numOfRandomsInTime) {
  return getRandomUsers(numOfRandomsInTime);
}

module.exports = {
  computeJobWithLimitedRandoms,
};
