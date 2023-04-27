const mysql = require("mysql");
const { promisify } = require("util");
//trying to connect to database
const connection = mysql.createConnection({
  host: "capellandiana",
  user: "capellandiana",
  password: "password",
  database: "pillpalDB",
});

const promisifiedQuery = promisify(connection.query).bind(connection);

module.exports = promisifiedQuery;
