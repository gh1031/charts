const router = require('koa-router')();
const echarts = require('../controller/echart');

router.get('/', ctx => ctx.body = 'welcome to options page');
router.get('/options', ctx => echarts.options(ctx));

module.exports = router;