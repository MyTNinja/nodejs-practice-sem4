let fs = require('fs');

fs.unlink('file2.txt', function (err, file) {
    if (err) throw err;
    console.log("file2.txt Deleted!")
});