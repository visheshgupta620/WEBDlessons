const express = require('express');
const app = express();
const path = require('path');
const users= require('./data/users');
app.use(express.urlencoded({extended:true}));
const methodOverride = require('method-override');


app.set('view engine' , 'ejs' );
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));


app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/users',(req,res)=>{
    res.render('user', {users});   //taaki users ko access kar paaye user.ejs
})

app.get('/users/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    const {username , password , age , address} = req.body;      //iske liye app.use(urlencoded) krna pdega

    users.push({                  //users me push krdiya array jo bnaya data me
        id: users.length+1,
        username,
        password,
        age,
        address
    })
    // console.log(users);

    res.redirect('/users');
})


app.get('/users/:id', (req, res)=>{
    const { id } = req.params;
    // console.log(id);

    const user = users.find((user)=>{
        return user.id == id;
    })
    
    // res.send(user);
    res.render('show', {user});

})

app.get('/users/:id/edit', (req, res)=>{
    const { id } = req.params;
    const user = users.find((user)=>{
        return user.id == id;
    })
    res.render('edit',{user});

})                              //ab inn changes ko save karne ke liye patch request bnayenge

app.patch('/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, age, address } = req.body;

    const user = users.find(user => user.id == id);

    user.username = username;
    user.age = age;
    user.address = address;

    res.redirect('/users');
});

app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    const index = users.indexOf(user);

    users.splice(index, 1);             //uss index se ek hi element delete krna iska mtlb

    res.redirect('/users');
})


const PORT=5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});