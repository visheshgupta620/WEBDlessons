const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;

const todos = ['Swimming', 'Sleeping', 'Eating', 'Studying'];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render('home', { todos });
})

app.post('/todos', (req, res) => {
    const { todo } = req.body;
    // console.log(todo);
    todos.push(todo);
    res.redirect('/');
})


app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});