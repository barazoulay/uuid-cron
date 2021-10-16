import {getRandomUUIDS} from '../src/random';

describe('cronLogic Tests', () => {
  describe('getRandomUUIDS', () => {
    it('return 20 random uuids', () => {
      const randomUUIDs = getRandomUUIDS(20);
      expect(randomUUIDs.length).toEqual(20);
      expect(randomUUIDs[0]).not.toEqual(randomUUIDs[1]);
    });
    it('randoms are not the same', () => {
      const randomUUIDs = getRandomUUIDS(20);
      expect(randomUUIDs[0]).not.toEqual(randomUUIDs[1]);
    });
  });
});
