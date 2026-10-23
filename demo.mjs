import {run} from './index.mjs';console.log(JSON.stringify(await run(new URL('./sample.json',import.meta.url)),null,2));
