import 'dotenv/config';
import { Pool } from 'pg';

async function check() {
  const pool = new Pool({ connectionString: 'postgresql://alas_user:change-this-strong-password@localhost:5433/alas' });
  try {
    const res = await pool.query(`SELECT column_name, data_type FROM information_schema.columns WHERE table_name = 'jurnal'`);
    console.log(res.rows.map(r => r.column_name).join(', '));
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
check();
