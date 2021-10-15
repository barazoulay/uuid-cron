# uuid-cron
Generate random uuids in a given time

# Quickstart

1. **Install**
```shell
npm install uuid-cron
```
2. **Init cron job**
```javascript
const { init, uuidv4CronLimited } = require('uuid-cron');
// run cron job every 20 seconds with 30 random uuids each time.
// for the first param, read for more details: https://www.npmjs.com/package/human-to-cron
init('each 20 seconds', 30);
```

3. **Get random uuid according to the init params**
```javascript
const randomUUID = uuidv4CronLimited();
```

