const mysql = require("mysql");
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "CWkeller1234!",
        database: "burgers_db"
    });
}
connection.connect();
module.exports = connection;