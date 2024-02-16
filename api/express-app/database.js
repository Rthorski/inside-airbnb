const Pool = require('pg').Pool;

const pool = new Pool({
    user: "inside_airbnb_user",
    host: "inside-airbnb-db",
    database: "inside_airbnb_db",
    password: "/d4JTaHaH3.9883!tUY_4dc",
    port: 5432,
  });

module.exports = pool;