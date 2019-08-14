const Base = require('./base');
const db = require('../utils/db');
class Users extends Base{
  async login(ctx) {
    const { request: { body } } = ctx;
    ctx.cookies.set('username', body.username, {
      domain: 'localhost',
      path: '/',
      maxAge: 10 * 60 * 1000,
      expires: new Date().getTime(),
      overwrite: false,
    })
    db.insert('users', { username: body.username })
    ctx.body = this.common.returnRes({
      username: body.username
    })
  }
  async menus(ctx) {
    const data = [{
      title: 'Echarts',
      id: '1',
      dpeth: 1,
      children: [{
        title: 'line',
        id: '1-1',
        depth: 2,
        path: '/echarts/line',
      }, {
        title: 'bar',
        id: '1-2',
        depth: 2,
        path: '/echarts/bar',
      }]
    }];
    console.log('/menus');
    ctx.body = this.common.returnRes(data);
  }
}

module.exports = new Users();
