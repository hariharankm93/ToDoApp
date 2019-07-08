const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

mongoose.connect('mongodb://localhost:27017/todo',{useNewUrlParser:true}).then(()=>{console.log('Database connected Successully')}).catch(err => console.log(err));

mongoose.Promise = global.Promise;

app.use((req,res,next) =>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
    next();
})

app.use(bodyParser.json());
app.use('/api',routes);
app.use((req,res,next)=>{
    res.send('Weolcome to Express');
})

app.listen(port,()=>{
    console.log(`Server Running on port ${port}`)
})