const Router = require('koa-router');
const router = new Router();
const users = require('../controller/users');

router.post('/login', ctx => users.login(ctx));
router.get('/menus', ctx => users.menus(ctx));

module.exports = router;