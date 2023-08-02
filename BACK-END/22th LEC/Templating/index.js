const express = require('express');
const app = express();
const path = require('path');


// console.log(__dirname);
// console.log(process.cwd());


const todos = [
    'Swimming',
    'Watching Movies',
    'Gaming',
    'Coding',
    'Sleeping',
    'Eating',
    'Cycling',
    'Dancing'
]


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    // res.send('Working Fine!!');
    res.render('home')
});

app.get('/getTodos', (req, res)=>{
    
    res.render('todo', {todos});   //todos hum todo ejs file me use kr payenge aise object ki tarah bheje to (key aur value dono todos hi)
})


const port = 5000;
app.listen(port, ()=>{
    console.log('Server is Up at Port', port);
})