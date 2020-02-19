const express = require('express');
const mongoose = require('mongoose');
const APIrouter = require('./routes/routes');


// =============================================
//init app
const app = express();

// =============================================
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))


// =============================================
//DB
//const url = "mongodb://root:0123456789@127.0.0.1:27017/moviesdb";
const url ="mongodb://localhost:27017/moviesdb";
mongoose.connect(url, {useNewUrlParser:true,  useUnifiedTopology: true});
var db = mongoose.connection;

if (!db) console.log("error with db connection");
else console.log("db connected!!!");


// =============================================
//routing
app.use('/api',APIrouter);

// =============================================
//applistening
const port = process.env.PORT || 3001;
app.listen(port,()=> console.log(`Server running in port ${port}`));
