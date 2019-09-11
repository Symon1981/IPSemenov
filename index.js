let http = require('http');
http.createServer(function(req, res){
    res.writeHead(200);
    res.write("Privet!");
    res.end();
}).listen(80);
