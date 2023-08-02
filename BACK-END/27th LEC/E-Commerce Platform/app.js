const express = require('express');
const path = require('path');
const app = express();

const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(() => {
    console.log('e-com-db connected!');
    })
    .catch((err) => {
        console.log(err);
    })


//MODELS ME PRODUCT.JS ME BNAYA HUMNE SCHEMA AUR MODEL


app.get('/',(req,res)=>{
    res.send('Working fine');
})


const productRoutes = require('./routes/product');   //router folder me roots bnaye taki yha zada bda code na ho aur usko use krne ke liye ye
app.use(productRoutes);


const port = 5000;
app.listen(port, () => {
    console.log('Server is started at port :', port);
})
