# uuid-cron
Generate random uuids in a given time

# Getting Started

**1. Install**
```shell
npm install uuid-cron
```
**2. Init cron job**
```javascript
const { init, uuidv4CronLimited, stop } = require('uuid-cron');
// for the first param, read cron syntax here: https://www.npmjs.com/package/human-to-cron
init('each 20 seconds');
```

**3. uuidv4Cron() will return random uuid every 20 seconds**
```javascript
const randomUUID = uuidv4Cron();
```

**4. On finish, stop the cron job, otherwise it will continue infinitely**
```javascript
stop();
```

### Limit the number of random uuids
use uuidv4CronLimited to control the number of uuids generated in each cron job
```javascript
init('each 20 seconds', 30);
// each 20 second generate 30 random uuids and return one of them each time
const limitedRandomUUIDS = uuidv4CronLimited();
```
    

