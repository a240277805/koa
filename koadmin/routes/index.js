var router = require('koa-router')();

// var promisify = require("promisify-node");
var db = require("../dbHelper");

router.get('/', function *(next) {
    var rows = yield db.getById('a_dicts', 'no');
    yield this.render('index', {
        title: rows[0].name
    });
});

module.exports = router;
