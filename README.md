# uuid-cron
Generate random uuids in a given time

# Getting Started

**1. Install**
```shell
npm install uuid-cron
```
**2. Init cron job**
```typescript
import { init, getCronUUID, stop } from 'uuid-cron';
// for the first param, read cron syntax here: https://www.npmjs.com/package/human-to-cron
init('each 20 seconds');
```

**3. getCronUUID() will return random uuid every 20 seconds**
```typescript
const randomUUID = getCronUUID();
```

**4. On finish, stop the cron job, otherwise it will continue infinitely**
```typescript
stop();
```

### Limit the number of random uuids
use getCronUUID to control the number of uuids generated in each cron job
```typescript
init('each 20 seconds', 30);
// each 20 second generate 30 random uuids and return one of them each time
const limitedRandomUUIDS = getCronUUID();
```
    

