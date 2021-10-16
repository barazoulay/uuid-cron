const { v4: uuidv4 } = require('uuid');
const { CronJob } = require('cron');
const humanToCron = require('human-to-cron');
const { initError } = require('./errorHandler');
const { RANDON_USERS_INIT, UUID_INIT_ERROR } = require('./constants');
const { computeJobWithLimitedRandoms } = require('./cronLogic');

let uuidv4Value = new Error(UUID_INIT_ERROR);
let randomUsers = [];
let numOfRandomsInTimeP = RANDON_USERS_INIT;
let job;
let initialized = false;
let initializedLimited = false;




/**
 * Starting cron job according your configuration
 * @param humanCron - e.g. each 20 seconds, more details here:
 * https://www.npmjs.com/package/human-to-cron
 * @param numOfRandomsInTime - amount of random uuids for each cron job
 * if null, it returns the same uuid during the cron
 */
function init(humanCron, numOfRandomsInTime) {
  const cronTime = humanToCron(humanCron);
  uuidv4Value = uuidv4();
  if (!numOfRandomsInTime || typeof numOfRandomsInTime != 'number') {
    initialized = true;
    job = new CronJob(cronTime, (() => {
      uuidv4Value = uuidv4();
    }), null, true, 'America/Los_Angeles');
  } else {
    initializedLimited= true;
    numOfRandomsInTimeP = numOfRandomsInTime;
    randomUsers = computeJobWithLimitedRandoms(cronTime, numOfRandomsInTime);
    job = new CronJob(cronTime, (() => {
      randomUsers = computeJobWithLimitedRandoms(cronTime, numOfRandomsInTime);
    }), null, true, 'America/Los_Angeles');
  }
  job.start();
}

function uuidv4Cron() {
  if (!initialized) {
    return initError();
  }
  return uuidv4Value;
}

function uuidv4CronLimited() {
  if (!initializedLimited) {
    return initError();
  }
  return randomUsers[Math.floor(Math.random() * numOfRandomsInTimeP)];
}

function stop() {
  job.stop();
}

function uuidv4Random() {
  return uuidv4();
}

module.exports = {
  init,
  uuidv4Cron,
  uuidv4CronLimited,
  stop,
  uuidv4Random,
};
