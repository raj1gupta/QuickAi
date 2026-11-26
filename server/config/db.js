import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export const ensureSchema = async () => {
  await sql`
    CREATE TABLE IF NOT EXISTS creations (
      id SERIAL PRIMARY KEY,
      user_id TEXT NOT NULL,
      prompt TEXT NOT NULL,
      content TEXT NOT NULL,
      type TEXT NOT NULL,
      publish BOOLEAN DEFAULT false,
      likes TEXT[] DEFAULT '{}',
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
};

export default sql;
