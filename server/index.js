const Koa = require('koa');
const app = new Koa();
const DB = require('./utils/db');
const bodyparser = require('koa-bodyparser');
const router = require('./router');
// const { checkLogin } = require('./middleware/checkLogin');

// app.use(checkLogin);
// db.connect().then(() => {
//   console.log('connect success')
// }).catch(err => console.log('connect fail', err));

app.use(bodyparser())
app.use(router.routes());

module.exports = app;
