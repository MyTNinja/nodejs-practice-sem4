let fs = require('fs');

fs.appendFile('file1.txt', " Content Appended!", function (err, file) {
    if (err) throw err;
    console.log("Saved!");
});