import { v4 as uuidv4 } from 'uuid';
import {NumOfRandomsInTime} from './types';

export function getRandomUUIDS(numOfRandomsInTime: NumOfRandomsInTime): string[] {
  const randoms = [];
  for (let i = 0; i < numOfRandomsInTime; i++) {
    randoms.push(uuidv4());
  }
  return randoms;
}
