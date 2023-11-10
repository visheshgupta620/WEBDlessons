const express = require('express');
const app = express();
const mongoose = require('mongoose');

// app.use(express.urlencoded({extended:true}));
// app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/quotesApp')
        .then(()=>{
            console.log('DB connected');
        })
        .catch((err)=>{
            console.log(err);
        })








const port = 5000;
app.listen(port,()=>{
    console.log('server up at port:',port)
})