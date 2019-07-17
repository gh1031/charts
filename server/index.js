const Koa = require('koa');
const app = new Koa();
const db = require('./utils/db');
const router = require('./router');

// db.connect().then(() => {
//   console.log('connect success')
// }).catch(err => console.log('connect fail', err));

app.use(router.routes());

module.exports = app;
