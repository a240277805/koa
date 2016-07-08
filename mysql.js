var koa = require('koa');
	app = koa();

var wrapper = require('co-mysql'),
	mysql = require('mysql');
var options = {
	host:'localhost',
	port: 3306,
	database: 'newday',
	user: 'root',
	password: 'root'
};
var pool = mysql.createPool(options),
	p = wrapper(pool);

var rows = p.query('select 1');
console.log(this,'-------');

app.use(function *() {
	console.log(rows);
});
app.listen(3000);