var koa = require('koa');
 var app = koa(); 
 // normal route 
 app.use(function* (next) { 
 	if (this.path !== '/') { 
 		return yield next 
 	} 
 	this.body = 'hello world' ;
}); 
app.use(upcaser ()) ;
function upcaser () { 
	return function* (next) {
		console.log('---------');
	 	yield next ;
	 	this.body = this.body.toUpperCase(); 
	} 
}

// /404 route 
app.use(function* (next) { 
	if (this.path !== '/404') {
	 	return yield next; 
	 } 
	 this.body = 'page not found' 
 }); 

 // /500 route 
 app.use(function* (next) { 
 	if (this.path !== '/500') { 
 		return yield next; 
 	} 
 	this.body = 'internal server error' 
 }); 


 app.listen(8080);