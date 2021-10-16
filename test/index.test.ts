import { init, uuidv4CronLimited, uuidv4Cron, stop } from '../src';
let uuidOriginal;
let uuidTarget;

describe('General functionality', () => {
  afterEach(() => {
    stop();
  })
  it('init with cron argument', () => {
    init('each 2 seconds');
    uuidOriginal = uuidv4Cron();
    for (let i = 0 ; i < 30; i ++){
      uuidTarget = uuidv4Cron()
      expect(uuidOriginal).toEqual(uuidTarget);
    }
  });
  it('init with cron argument and limit uuids', () => {
    init('each 2 seconds', 1);
    uuidOriginal = uuidv4CronLimited();
    for (let i = 0 ; i < 30; i ++){
      uuidTarget = uuidv4CronLimited()
      expect(uuidOriginal).toEqual(uuidTarget);
    }
  });
});
