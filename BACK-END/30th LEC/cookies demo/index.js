const express = require('express');
const app = express();
const port = 5000;
const cookieParser = require('cookie-parser');
// app.use(cookieParser());
app.use(cookieParser('randomsecrets'));   //   signed cookie   isko destructure krne ke liye req.signedcookies
//  aur true false bhi check krna pdta agar signed cookies use krte


app.use(cookieParser('randomSecrets'));

app.get('/', (req, res) => {
    res.send('Working Fine!');
});

// app.get('/setCookie', (req, res)=>{
//     res.cookie('name', 'salman khan');
//     res.send('cookie set');
// });

// app.get('/getCookie', (req, res)=>{
//     const {name} = req.cookies;
//     console.log();
//     res.send(`Name is ${name}`);
// });


// app.get('/buyIphone', (req, res)=>{
//     res.cookie('price', '40000');
//     res.send('you have successfully purchased an Iphone');
// });

// app.get('/buyEarbuds', (req, res)=>{
//     const {price} = req.cookies;
//     let discountPrice = 10000;
//     let earbudsPrice = 30000;
//     if(price >= 50000){
//         earbudsPrice = earbudsPrice - discountPrice;
//         res.cookie('price', earbudsPrice);
//         res.send('successfully purchased earbuds'); 
//     }
//     else{
//         res.send('You have not spent enough paisa')
//     }
// });

app.get('/buyIphone', (req, res) => {
    res.cookie('price', '40000', { signed: true });
    res.send('you have successfully purchased an Iphone');
});

app.get('/buyEarbuds', (req, res)=>{
    const {price} = req.signedCookies;
    let discountPrice = 10000;
    let earbudsPrice = 30000;
    console.log(price);
    if(price && price >= 50000){
        earbudsPrice = earbudsPrice - discountPrice;
        res.cookie('price', earbudsPrice);
        res.send('successfully purchased earbuds'); 
    }
    else{
        res.send('You have not spent enough paisa')
    }
});

app.listen(port, () => {
    console.log('Server is Up at Port ', port);
});