import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USERNAME || "selva",
  password: process.env.DATABASE_PASSWORD || "selva",
  database: process.env.DATABASE_NAME || "company_form"
});

export default function connectDatabase() {
  return con;
}
