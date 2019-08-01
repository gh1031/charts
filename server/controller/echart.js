const Base = require('./base');
// const optionsField = require('../models/options');
const titleField = require('../json/title.json');
const legendField = require('../json/legend.json');
const animation = require('../json/animation.json');
const xAxis = require('../json/xAxis.json');
const yAxis = require('../json/yAxis.json');
const grid = require('../json/grid.json');

class Echarts extends Base {
  async options(ctx) {
    // const transformOptions = optionsField.map((item, index_p) => {
    //   let ret = {};
    //   ret.title = item.title;
    //   ret.id = index_p + 1 + '';
    //   ret.depth = 1;
    //   if (item.children) {
    //     ret.children = item.children.map((child, index_c) => ({
    //       title: child,
    //       id: `${ret.id}-${index_c + 1}`,
    //       depth: 2,
    //     }))
    //   }
    //   return ret;
    // });
    const ret = [
      titleField,
      legendField,
      grid,
      xAxis,
      yAxis,
      ...animation,
    ]
    ctx.body = this.common.returnRes(ret);
  }
}

module.exports = new Echarts();