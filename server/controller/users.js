const Base = require('./base');

class Users extends Base{
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
    ctx.body = this.common.returnRes(data);
  }
}

module.exports = new Users();
