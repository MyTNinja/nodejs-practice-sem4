let fs = require('fs');

fs.writeFile('file3.txt', " Content Written!", function (err, file) {
    if (err) throw err;
    console.log("Saved!");
});