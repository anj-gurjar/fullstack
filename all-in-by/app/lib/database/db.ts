import { Pool } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
const client = new Pool({
  host: 'localhost',
  database: 'bucket',
  user: 'vegb',
  password: 'vegb@123',
  port: 5432,
});

client.connect()
export const db= drizzle({
  logger:{
    logQuery(query, params) {
        
    },
  },
  client,
  schema:{

  }
}
)
