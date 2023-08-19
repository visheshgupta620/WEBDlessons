const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

mongoose.connect('mongodb://127.0.0.1:27017/authdb')
    .then(() => {
        console.log('database connected');
    })
    .catch((err) => {
        console.log(err);
    })

const User = require('./models/user');

app.get('/', (req, res, next) => {         //middleware bnaya to check user exist kr rha ho tabhi home page khule , nhi ho to login page khule direct (just like facebook)
    if (!req.session.userid) {             //login krte hue jab password correct ho tab humne session me _id dali aur ye check kr rhe iss line ki session me _id exist kr rhi ya nhi 
        res.redirect('/login');            // to home page tbhi khulega jab user log in kar chuka hoga (kyunki login nhi kiya hoga to session me _id hogi hi nhi)
    }
    else{
    next();
    }
}, (req, res) => {
    res.render('home');
})

app.get('/login', (req, res) => {
    res.render('login')
})
app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password, email } = req.body;
    const user = await User.findOne({ username });
    if (!user) {            //so that username is unique everytime
        User.create({ username, password, email });
        res.redirect('/login');
    }
    else {
        res.redirect('/register')
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user) {
        if (user.password == password) {
            req.session.userid = user._id;              //current session me user ki unique (_id) daaldi
            res.redirect('/');
        }
        else {
            res.redirect('/login')
        }
    }
    else {
        res.redirect('/register')
    }
})



const port = 3000;
app.listen(port, () => {
    console.log('Server started at port : ', port);
})