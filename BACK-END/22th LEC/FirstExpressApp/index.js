const express = require('express');
const app = express();

const movies = [
    {
        name: 'Batman',
        rating: 7.8,
        language: 'English, Hindi'
    },

    {
        name: 'Hangover',
        rating: 9,
        language: 'Hindi, English'
    },

    {
        name: 'SuperMan',
        rating: 8.8,
        language: 'English'
    },

    {
        name: 'Man of Steel',
        rating: 8,
        language: 'English'
    }

]


// app.use((req, res)=>{               //get post dono ke liye chalta use

//     // console.log(req);

//     res.send('<h1>Server working fine!!</h1>');
// });


app.get('/', (req, res) => {       //req -> request          res -> response
    res.send('HOME PAGE');
});

app.get('/cat', (req, res) => {
    res.send('meowwww!!');
});

// app.get('/cat', (req,res)=>{
//     res.send('meowww part 2!!');
// });

app.get('/user', (req, res) => {
    res.send('You are the user.');
});

app.get('/getData', (req, res) => {

    const { name } = req.query;          //    /getdata?name=Batman krenge tab name me batman jayega aur ye vala get chlega 
    console.log(req.query);          // query se kiya   ?=

    let arr = [];
    for (let movie of movies) {
        if (movie.name === name) {
            arr.push(movie);
        }
    }
    res.json(arr);
});


app.get('/r/:username/:password', 
(req, res) => {

    const {username, password} = req.params;  // params se kar rahe /username/password

    console.log(req.params);
    res.send(`your username is ${username}, your password is ${password}`);
})



app.get('*', (req, res) => {
    res.status(404).send('404 Not Found!!');
});


app.listen(4000, () => {                    //4000 -> server port (kuch bhi value de skte jo valid ho)
    console.log('Server is up at port', 4000);
});


//server start krke chorme me localhost:(portno) likhe to bhi chal jayega