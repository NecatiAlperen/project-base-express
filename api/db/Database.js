const mongoose = require('mongoose');

let instance = null;

class Database {
    constructor() {
      if (!instance) {
        this.mongoConnection = null;
        instance = this;
      }
    }
  
    async connect(connectionString) {
      try {
        console.log("db connecting...");
        console.log('Connection String:', connectionString); 
        let db = await mongoose.connect(connectionString);  
        this.mongoConnection = db;
        console.log("db connected.");
      } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
      }
    }
  }
  
  module.exports = Database;
  
  

