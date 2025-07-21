import { client } from "../database/db";

export const connectToDb = async () => {
  try {
    await client.connect();
    console.log('✅ Database connected successfully!');
  } catch (err) {
    console.error('❌ Failed to connect to the database:', err);
  }
};