let mysql = require('mysql2');

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("CREATE DATABASE node", function (err, result) {
        if (err) throw err;
        console.log("Created database node");
    });
});

