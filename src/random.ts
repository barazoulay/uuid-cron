import { v4 as uuidv4 } from 'uuid';
import {NumOfRandoms} from './types';

export function getRandomUUIDS(numOfRandoms: NumOfRandoms): string[] {
  const randoms = [];
  for (let i = 0; i < numOfRandoms; i++) {
    randoms.push(uuidv4());
  }
  return randoms;
}
