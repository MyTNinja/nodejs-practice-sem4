let fs = require('fs');

let text = "This file was created through writeFile()."
fs.writeFile('file3.txt', text, function (err) {
    if (err) throw err;
    console.log("Saved!")
});