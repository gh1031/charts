const commonMethods = require('../utils/commonMethods');

class Base {
  constructor() {
    this.common = commonMethods;
  }
}

module.exports = Base;