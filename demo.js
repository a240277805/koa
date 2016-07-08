var koa = require('koa');
var app = koa();

function* inc () { 
 var number = 0 
while (true) 
	yield number++ 
}
 var test = inc() ;
 console.log(test);
  console.log(test.next().value) // -> 0 
 console.log(test.next().value) // -> 1 
 console.log(test.next().value) // -> 2

app.use(function *(next) {
	var start = new Date;
	yield next;
	var ms =new Date - start;
	this.set('X-Response-Time',ms+'ms');
})

app.use(function *(next) {
	var start = new Date();
	yield next;
	var ms = new Date() -start;
	
	console.log('%s %s - %s----',this.method , this.url, ms);
})
app.use(function *(next) {
	var start = new Date();
	yield next;
	var ms = new Date() -start;
	
	console.log('----');
})

app.use(function *() {
	console.log(11,this);
	this.body = 'Hello  World';
	console.log(22);
});
app.listen(3000);

