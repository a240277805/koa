var koa = require('koa');

var app = module.exports = koa();

app.use(function *pageNotFound(next){
  yield next;
console.log('1');
  if (404 != this.status) 
    return;

  // we need to explicitly set 404 here
  // so that koa doesn't assign 200 on body=
  this.status = 404;
console.log('2');

  switch (this.accepts('html', 'json')) {
    case 'html':
      this.type = 'html';
      this.body = '<p>Page Not Found</p>';
      break;
    case 'json':
      this.body = {
        message: 'Page Not Found'
      };
      break;
    default:
      this.type = 'text';
      this.body = 'Page Not Found';
  }
console.log('2',this.type,this.body);
})

if (!module.parent) app.listen(3000);
