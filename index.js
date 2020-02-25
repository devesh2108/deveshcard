var http = require('http');
function deveshcard(title,name) 
{
    var server = http.createServer(function (req, resp) {
    
    if (req.url === "/") {
        resp.send("index.html");
        console.log(title,name);
    }
});
server.listen(4000);
 
console.log('Server Started listening on 4000');
}

exports.deveshcard=deveshcard;