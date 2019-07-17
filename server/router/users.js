const Router = require('koa-router');
const router = new Router();
const users = require('../controller/users');

router.get('/menus', ctx => users.menus(ctx));

module.exports = router;