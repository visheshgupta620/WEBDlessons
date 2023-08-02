const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

const todos = ['Gaming', 'Swimming', 'Coding', 'Sleeping'];

app.get('/todos', (req, res)=>{
    res.json({
        success:true,
        todos
    })
});

app.post('/todos', (req, res)=>{
    const { todo } = req.body;
    todos.push(todo);
    res.json({
        success:true
    })
})

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log('Server is up at PORT', PORT);
})