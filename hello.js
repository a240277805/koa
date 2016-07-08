/*var http=require("http");
http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/plain"});
	response.write("Hello World");
	response.end();
}).listen(8888);*/


var koa = require("koa");
var app = koa();
app.use(function *() {
	this.body = 'Hello World';
});
app.listen(8888);