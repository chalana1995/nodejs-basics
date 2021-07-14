const path = require('path');


// Base file name
console.log("=== path name ===",path.basename(__filename));

// Directory name
console.log("=== Directory name ===", path.dirname(__filename));

// File Extension
console.log("=== Extention ===", path.extname(__filename));

// Create path Object
console.log("=== Object Path ===", path.parse(__filename));
console.log("=== Object Path root/dir/base/ext/name ===", path.parse(__filename).base);

// Concatenates paths
console.log("=== concate path ===", path.join(__dirname, 'test', 'hello.html'));