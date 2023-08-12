const express = require('express');
const app = express();
const session = require('express-session');
const PORT = 5000;

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));


app.get('/',(req,res)=>{
    res.send(req.session);
});

app.get('/setSession', (req, res)=>{
    req.session.name = 'Temp Name',
    req.session.mode = 'dark'
    res.send('session set')
});

app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});