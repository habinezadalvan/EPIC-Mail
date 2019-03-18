import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Defining a new Pool class as pool to excute query f()
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});
pool.on('connect', () => {
  console.log('Successfully connected to the database');
});

export default pool;
