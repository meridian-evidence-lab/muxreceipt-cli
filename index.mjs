import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';
export async function run(inputPath, moduleUrl=new URL('../muxreceipt-core/index.mjs',import.meta.url)) {
  const raw=await readFile(inputPath); const input=JSON.parse(raw);
  const engine=await import(moduleUrl.href);
  const result=engine.audit(input);
  return {...result,provenance:{inputSha256:createHash('sha256').update(raw).digest('hex'),engine:'muxreceipt-core@0.1.0',source:'local-file'}};
}
