const mysql = require("mysql");
const { promisify } = require("util");
//trying to connect to database
const connection = mysql.createConnection({
  host: "your-host",
  user: "your-username",
  password: "your-password",
  database: "your-database-name",
});

const promisifiedQuery = promisify(connection.query).bind(connection);

module.exports = promisifiedQuery;
