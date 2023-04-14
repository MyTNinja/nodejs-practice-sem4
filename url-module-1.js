let url = require('url');
let addr = "http://localhost:8080/default.htm?year=2023&month=April";

let urlObject = url.parse(addr, true);
console.log("Host: " + urlObject.host);
console.log("Path Name: " + urlObject.pathname);
console.log("Srch: " + urlObject.search);

let urlData = urlObject.query;
console.log("Year: " + urlData.year + " Month: " + urlData.month);