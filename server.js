/**
 * Created by Archish on 4/11/2018.
 */

var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path= (require('path'))
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log("Could not connect to database", err);
    }else{
        console.log("Connected to database : "+config.db)
    }
});


app.use(express.static(__dirname + '/client/dist/'))
app.get("/",(req,res)=>{
   res.sendfile(path.join(__dirname+'/client/dist/index.html'))
});
app.listen(8080);


