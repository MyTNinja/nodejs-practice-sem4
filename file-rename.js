let fs = require('fs');

fs.rename('file2.txt', 'newname-file2.txt', function (err) {
    if (err) throw err;
    console.log("file2.txt Renamed to newname-file2.txt");
});