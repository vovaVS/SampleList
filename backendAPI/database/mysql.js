import mysql from 'mysql2';

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: 'root',
  database: 'test',
});

export default connection;
