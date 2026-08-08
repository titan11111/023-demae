import { cp, copyFile, rm } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const builtAssets = resolve(root, 'dist/game-assets');
const playableAssets = resolve(root, 'game-assets');

await rm(playableAssets, { recursive: true, force: true });
await cp(builtAssets, playableAssets, { recursive: true });
await copyFile(resolve(root, 'dist/index.html'), resolve(root, 'index.html'));
