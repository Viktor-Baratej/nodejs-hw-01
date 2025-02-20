import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const PATH_DB = join(
  dirname(fileURLToPath(import.meta.url)),
  '../db/db.json',
);
