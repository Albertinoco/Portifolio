import pg from "pg";

const pool = new pg.Pool({
  user: "postgres",
  host: "127.0.0.1",
  database: "angola",
  password: "Tinotino95!",
  port: 5433,
  max: 10,
});
export default pool;
