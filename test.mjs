import test from 'node:test';import assert from 'node:assert/strict';import {run} from './index.mjs';
test('audit includes content digest and engine version',async()=>{const r=await run(new URL('./sample.json',import.meta.url));assert.match(r.provenance.inputSha256,/^[a-f0-9]{64}$/);assert.equal(r.provenance.engine,'muxreceipt-core@0.1.0')});
test('unreadable export fails instead of claiming success',async()=>{await assert.rejects(run(new URL('./missing.json',import.meta.url)))});
