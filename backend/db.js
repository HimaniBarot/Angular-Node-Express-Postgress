const POOL = require("pg").Pool;

const pool = new POOL({
    user: "postgres",
    password: "pAssWorD",
    host: "localhost",
    port: 5432,
    database: "peantodo",
});

module.exports = pool; 