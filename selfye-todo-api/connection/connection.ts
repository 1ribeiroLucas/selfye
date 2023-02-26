import { Pool } from 'pg';

export const todoApiPool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'todo_api_db',
  password: 'postgres',
  port: 5432,
});
