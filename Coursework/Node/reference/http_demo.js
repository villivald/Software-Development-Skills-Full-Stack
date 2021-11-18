const http = require("http");

http
  .createServer((request, response) => {
    response.write("Hello world");
    response.end();
  })
  .listen(8080, () => console.log("Server running on port 8080"));
