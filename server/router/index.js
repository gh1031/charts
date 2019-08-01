const Router = require('koa-router');
const router = new Router();
const users = require('./users');
const echarts = require('./echart');

router.get('/', async ctx => {
  ctx.body = 'welcome to charts service!'
});

router.use('/proxy/users', users.routes());
router.use('/proxy//echart', echarts.routes());

module.exports = router;