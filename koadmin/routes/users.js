var router = require('koa-router')();

router.get('/', function *(next) {
	console.log('user-----------');
  this.body = 'this a users response!';
});

module.exports = router;
