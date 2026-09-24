import 'dotenv/config';
import { db } from './src/shared/lib/db';
import { jurnal } from './drizzle/schema';
import { sql } from 'drizzle-orm';
async function run() {
  const r = await db.select({ count: sql<number>`count(*)` }).from(jurnal);
  console.log('Total Jurnal:', r[0].count);
  process.exit(0);
};
run();
