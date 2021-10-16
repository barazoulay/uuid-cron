import { v4 as uuidv4 } from 'uuid';
import {NumOfRandomsInTime} from './types';

function getRandomUsers(numOfRandomsInTime: NumOfRandomsInTime): string[] {
  const randoms = [];
  for (let i = 0; i < numOfRandomsInTime; i++) {
    randoms.push(uuidv4());
  }
  return randoms;
}

export function computeJobWithLimitedRandoms(cronTime: string, numOfRandomsInTime: NumOfRandomsInTime): string[] {
  return getRandomUsers(numOfRandomsInTime);
}
