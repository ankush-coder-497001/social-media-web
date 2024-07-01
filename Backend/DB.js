const mongoose = require("mongoose");
require('dotenv').config();
const DataBase = process.env.DBURL
mongoose.connect(DataBase);

mongoose.connection.once('open',()=>{
  console.log("connected to database")
})

mongoose.connection.on('error',()=>{
  console.log("error in database connection")
})

module.exports = mongoose;