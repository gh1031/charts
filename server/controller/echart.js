const Base = require('./base');
const optionsField = require('../models/options');

class Echarts extends Base {
  async options(ctx) {
    const transformOptions = optionsField.map((item, index_p) => {
      let ret = {};
      ret.title = item.title;
      ret.id = index_p + 1 + '';
      ret.depth = 1;
      if (item.children) {
        ret.children = item.children.map((child, index_c) => ({
          title: child,
          id: `${ret.id}-${index_c + 1}`,
          depth: 2,
        }))
      }
      return ret;
    });
    ctx.body = this.common.returnRes(transformOptions);
  }
}

module.exports = new Echarts();