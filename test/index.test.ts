import { init, getCronUUID, stop } from '../src';
let uuidOriginal;
let uuidTarget;

describe('General functionality', () => {
  afterEach(() => {
    stop();
  })
  it('init with cron argument', () => {
    init('each 2 seconds');
    uuidOriginal = getCronUUID();
    for (let i = 0 ; i < 30; i ++){
      uuidTarget = getCronUUID()
      expect(uuidOriginal).toEqual(uuidTarget);
    }
  });
  it('init with cron argument and limit uuids', () => {
    init('each 2 seconds', 1);
    uuidOriginal = getCronUUID();
    for (let i = 0 ; i < 30; i ++){
      uuidTarget = getCronUUID()
      expect(uuidOriginal).toEqual(uuidTarget);
    }
  });
});
