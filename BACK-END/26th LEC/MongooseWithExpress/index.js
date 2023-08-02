const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/VisheshDB')
    .then(() => {
        console.log('VisheshDB connected!');
    })
    .catch((err) => {
        console.log(err);
    })
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    contact: Number
})
const User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
    res.send('Working Fine');
})

app.get('/users', async (req, res) => {
    // res.send('bnana abhi reading data');
    const users = await User.find({});
    res.render('index', { users });
})

app.get('/user/new', (req, res) => {
    res.render('new');
})

app.post('/users', async (req, res) => {               //async await use kar skte ya fir .then .catch se
    const { name, age, email, contact } = req.body;
    // await User.create({
    //     name:name,
    //     age:age,
    //     email:email,
    //     contact:contact
    // })
    await User.create({ name, age, email, contact })
    res.redirect('/users');
})

// app.post('/user/:id',async(req,res)=>{     //post se bhi ho jata hai delete bina method-override ke delete ke but vo restful routing ni kehlayega but krna chiye 
//     const {id} = req.params;
//     await User.findByIdAndDelete(id);
//     res.redirect('/users');
// })
app.delete('/user/:id',async(req,res)=>{     
    const {id} = req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/users');
})


const port = 5000;
app.listen(port, () => {
    console.log('Server started at port : ', port);
}) 