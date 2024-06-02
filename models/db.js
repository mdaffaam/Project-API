// models/db.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'cloud_sql_host',      // Replace with your Cloud SQL host
  user: 'username',            // Replace with your Cloud SQL username
  password: 'password',        // Replace with your Cloud SQL password
  database: 'database_name',   // Replace with your Cloud SQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Add the socket path for Cloud SQL
  socketPath: '/cloudsql/your_connection_name' // e.g., 'project-id:region:instance-id'
});

module.exports = pool;
