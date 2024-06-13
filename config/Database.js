import { Sequelize } from "sequelize";

// Informasi koneksi Cloud SQL
const db = new Sequelize('auth_db', 'root', 'the77gameplay', {
    host: "34.101.163.152",
    dialect: "mysql",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

export default db;
