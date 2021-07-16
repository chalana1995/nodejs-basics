const os = require('os');

// Platform
console.log("==== paltform ===",os.platform());

// CPU Arch
console.log("==== cpu arch ===",os.arch());

// CPU Core Info
console.log("==== cpu core ===",os.cpus());

//Free Memory
console.log("==== free memory ===",os.freemem());

//Total Memory
console.log("==== total memory ===",os.totalmem());

//Home Dir
console.log("==== home dir ===",os.homedir());

//Up time
console.log("==== up time ===",os.uptime());