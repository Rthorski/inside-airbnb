const Pool = require('pg').Pool;

const pool = new Pool({
    user: "inside_airbnb_user",
    host: "127.0.0.1",
    database: "inside_airbnb_db",
    password: "/d4JTaHaH3.9883!tUY_4dc",
    port: 5434,
  });

module.exports = pool;