const http = require("http");
http.createServer((req,resp) => {
    resp.writeHead(200,{"Content-Type":"application\json"});
    resp.write(JSON.stringify({"name":"Pankaj","last":"kumar"}));
    resp.end();
}).listen(2563);
