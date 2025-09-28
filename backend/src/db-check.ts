import { Client } from 'pg';

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('✅ Conectado a Supabase:', res.rows[0]);
  } catch (err) {
    console.error('❌ Error de conexión:', err);
  } finally {
    await client.end();
  }
}

testConnection();
