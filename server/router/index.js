const Router = require('koa-router');
const router = new Router();
const users = require('./users');

router.get('/', async ctx => {
  ctx.body = 'welcome to charts service!'
})
router.use('/users', users.routes());

module.exports = router;