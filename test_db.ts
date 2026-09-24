import { db } from './src/shared/lib/db';
import { jurnal } from './drizzle/schema';
import { sql } from 'drizzle-orm';
async function run() {
  const r = await db.select({ count: sql<number>`count(*)` }).from(jurnal);
  console.log('Total Jurnal:', r[0].count);
  
  // also check if any errors fetching list
  const items = await db.select({
      id: jurnal.id,
      ringkasan: jurnal.ringkasan,
  }).from(jurnal).limit(1);
  console.log(items);
  
  process.exit(0);
};
run();
