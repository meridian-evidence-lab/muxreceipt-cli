import {run} from './index.mjs';
try {
 const path=process.argv[2];if(!path)throw new Error('Usage: node cli.mjs input.json');
 const result=await run(path);console.log(JSON.stringify(result,null,2));
 process.exitCode=result.status==='review-required'?2:0;
}catch(e){console.error(e.message);process.exitCode=1;}
