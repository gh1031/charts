const Router = require('koa-router');
const router = new Router();
const echarts = require('../controller/echart');

router.get('/options', ctx => echarts.options(ctx));

module.exports = router;