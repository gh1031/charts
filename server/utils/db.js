const mongoose = require('mongoose');
const config = require('../config/db');

const {
  db: {
    host,
    port,
    user,
    pass,
    database,
  },
  options,
} = config;
module.exports = {
  connect(customOptions = {}) {
    const uri = `mongodb://admin:${pass}@${host}:${port}/${database}?authSource=${user}`
    // const uri = `mongodb://${host}:${port}/${database}`;
    const newOptions = Object.assign(options, customOptions);
    console.log(uri);
    const db = mongoose.connect(
      uri,
      newOptions,
    )
    return db;
  }
}