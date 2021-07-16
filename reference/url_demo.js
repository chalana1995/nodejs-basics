const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log("Seroalized==",myUrl.href);
console.log("Seroalized==",myUrl.toString());

// Host (root domain)
console.log("== Host ==", myUrl.host);

// HostName (does not get port number)
console.log("== Host name ==", myUrl.hostname);

// Pathname
console.log(" === path name ==", myUrl.pathname);

// Serialized Query
console.log(" === serialized query =====", myUrl.search);

//params Object
console.log("==== params object ===", myUrl.searchParams);

// Add Params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop Params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))