// const mongoose = require('mongoose');
const CONFIG = require('../config/dbConf');
const MongoClient = require('mongodb').MongoClient;

const url = `mongodb://${CONFIG.db.host}:${CONFIG.db.port}`
class DB {
  constructor() {
    this.connect()
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(url, (err, client) => {
        if (err) {
          reject(err);
        } else {
          const db = client.db(CONFIG.db.dbName);
          resolve(db);
        }
      })
    })
  }

  find(collectionName, json = {}) {
    return new Promise((resolve, reject) => {
    this.connect().then(db => {
      const result = db.collection(collectionName).find(json);
      result.toArray((err, docs) => {
        if (err) {
          return reject(err)
        }
        return resolve(docs);
      })
    })    
    })
    // const db = await this.connect();
    // const result = db.collection(collectionName).find(json);
    // result.toArray((err, docs) => {
    //   if (err) {
        
    //   }
    // })
  }

  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then(db => {
        db.collection(collectionName).insertOne(json, (err, results) => {
          if (err) {
            return reject(err)
          }
          return resolve(results)
        })
        // db.createCollection(collectionName, json, (err, results) => {
        //   if (err) {
        //     return reject(err)
        //   }
        //   return resolve(results)
        // })
      })
    })
  }

  update() {

  }
}

const myDb = new DB();
module.exports = myDb;
