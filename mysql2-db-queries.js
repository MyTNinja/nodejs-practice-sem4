let mysql = require('mysql2');
let sql = "";

let con = mysql.createConnection({
    host: 'localhost',
    user: '<user-name>',
    password: '<password>',
    database: 'node'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected to node DB!");

    //creating new table
    sql = "CREATE TABLE customers(name varchar(255), address varchar(255))";
    con.query(sql, function (err) {
        if (err) throw err;
        console.log("Table customers created!");
    });

    //inserting values into table
    let values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    sql = "INSERT INTO customers VALUES ?";
    con.query(sql, [values], function (err) {
        if (err) throw err;
        console.log("Values Inserted!")
    });

    //display all tuples of table
    sql = "SELECT * FROM customers";
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});