// const Path = require('path');
// ans = Path.normalize('/abc/../xyz/../vritti.js');
// console.log(ans);


// const path = require("path");
// filePath = "/amd/abc.txt"
// a = path.dirname(filePath);
// console.log("dirname = ",a);
// b = path.basename(filePath);
// console.log("basename = ",b);
// c = path.extname(filePath);
// console.log("extname = ",c);


// const Path = require("path");
// ans = Path.resolve("./Lab17_1.js");
// console.log(ans);


// const Path = require("path");
// ans = Path.relative('abc/xyz/first.js','abc/qwe/second.js');
// console.log(ans);


const Path = require ("path");
ans = Path.join('abc/xyz/first.js','abc/qwe/second.js');
console.log(ans);