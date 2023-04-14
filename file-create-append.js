let fs = require('fs');

let text = "This file was created through appendFile()."
fs.appendFile('file1.txt', text, function (err) {
    if (err) throw err;
    console.log("Saved!")
});