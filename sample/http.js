var http = require("http");

http.createServer(function(req,res){
    console.log("요청 발생");
    var body = "hello Server";
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end("nodejs https server 안녕하세요");
}).listen(3000);//3000번 포트로 날림 >>> localhost:3000