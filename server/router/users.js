const Router = require('koa-router');
const router = new Router();
const users = require('../controller/users');
// const DB = require('../utils/db');
router.get('/', async ctx => {
  ctx.body = 'welcome to user page'
});
router.post('/login', ctx => users.login(ctx));
router.get('/menus', ctx => users.menus(ctx));

module.exports = router;