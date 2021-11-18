const url = require("url");

const myUrl = new URL(
  "https://www.google.com:8000/hello.html?id=1000&status=active"
);

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams);
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
