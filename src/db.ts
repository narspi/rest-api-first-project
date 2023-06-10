import dotenv from "dotenv";
import { Client,Pool } from 'pg';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.EXTERNAL_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// const client = new Client(externalUrl);

export const query = (text:string) => pool.query(text);

