import { v4 as uuidv4 } from 'uuid';
import { CronJob } from 'cron';
import humanToCron from 'human-to-cron';
import { initError } from './errorHandler';
import { NUM_OF_UUID_INIT, UUID_INIT_ERROR } from './constants';
import { computeJobWithLimitedRandoms } from './cronLogic';
import {NumOfRandomsInTime} from './types';

let uuidv4Value = new Error(UUID_INIT_ERROR);
let randomUsers: string[] = [];
let globalNumberOfUUIDS = NUM_OF_UUID_INIT;
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
export function init(humanCron: string, numOfRandomsInTime: NumOfRandomsInTime = globalNumberOfUUIDS) {
  const cronTime = humanToCron(humanCron);
  uuidv4Value = uuidv4();
  if (!numOfRandomsInTime) {
    initialized = true;
    job = new CronJob(cronTime, () => {
      uuidv4Value = uuidv4();
    }, null, true, 'America/Los_Angeles');
  } else {
    initializedLimited= true;
    globalNumberOfUUIDS = numOfRandomsInTime;
    randomUsers = computeJobWithLimitedRandoms(cronTime, numOfRandomsInTime);
    job = new CronJob(cronTime, () => {
      randomUsers = computeJobWithLimitedRandoms(cronTime, numOfRandomsInTime);
    }, null, true, 'America/Los_Angeles');
  }
  job.start();
}

export function uuidv4Cron() {
  if (!initialized) {
    return initError();
  }
  return uuidv4Value;
}

export function uuidv4CronLimited() {
  if (!initializedLimited) {
    return initError();
  }
  return randomUsers[Math.floor(Math.random() * globalNumberOfUUIDS)];
}

export function stop() {
  job.stop();
}

export function uuidv4Random() {
  return uuidv4();
}
