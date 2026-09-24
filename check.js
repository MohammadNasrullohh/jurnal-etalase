const { Pool } = require('pg');
async function check() {
  const pool = new Pool({ connectionString: 'postgresql://alas_user:change-this-strong-password@localhost:5433/alas' });
  try {
    const res = await pool.query(`SELECT column_name FROM information_schema.columns WHERE table_name = 'jurnal'`);
    console.log("Columns:", res.rows.map(r => r.column_name).join(', '));
  } catch(e) {
    console.error(e);
  } finally {
    pool.end();
  }
}
check();
