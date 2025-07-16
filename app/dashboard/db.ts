import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  database: 'bucket',
  user: 'vegb',
  password: 'vegb@123',
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log(' PostgreSQL connected successfully!');
     
  })
  .catch((error:Error) => {
    console.error(' PostgreSQL connection error:', error.message);
  });
