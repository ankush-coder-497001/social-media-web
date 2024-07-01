const express = require("express");
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const database = require("./DB");
const app = express();
const UserRouter = require('./Routes/UserRoute');
const PostRouter = require('./Routes/PostRouter');
app.use(bodyParser.json());
app.use(cors());
//routes

app.use('/User',UserRouter)
app.use('/Post',PostRouter);

const port = process.env.PORT || 4001;
app.listen(port,()=>{
  console.log(`Server is running on port ${port}`)
})