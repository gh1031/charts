const Base = require('./base');

class Users extends Base{
  async login(ctx) {
    const { request: { body } } = ctx;
    console.log(ctx)
    ctx.cookies.set('username', body.username, {
      domain: 'localhost',
      path: '/',
      maxAge: 10 * 60 * 1000,
      expires: new Date().getTime(),
      overwrite: false,
    })

    ctx.body = this.common.returnRes({
      username: body.username
    })
  }
  async menus(ctx) {
    const isExist = await this.common.verifyCookies(ctx);
    console.log(isExist, 'isExist')
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
    if (!isExist) {
      return ctx.body = this.common.returnRes(null, -1, '请重新登陆！');
    }
    ctx.body = this.common.returnRes(data);
  }
}

module.exports = new Users();
