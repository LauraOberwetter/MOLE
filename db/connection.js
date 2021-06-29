const mysql = require("mysql"); //import mysql
const util = require("util"); //allows use of promisify from library

//create connection with mysql
//store in .env
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mySQLpWord:)",
    database: "hvpt"
})

// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

//promisifying queries allows us to use async/await syntax
connection.query = util.promisify(connection.query)

//export connection
module.exports = connection;