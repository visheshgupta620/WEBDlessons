const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}));  // niche post request me req.body chiye to uske liye ye likhna pdega         1
app.use(express.json());                       //agar json data ki req.body chiye ho to ye                                  2


app.get('/',(req,res)=>{
    res.render('home');
})

app.post('/login', (req, res)=>{

    console.log(req.body);                                           //1
    res.send('You made a post Request')
})

app.post('/jsonData', (req, res)=>{
    console.log(req.body);                                           //2
    res.send('You made a request at /jsonData route');
})

app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});