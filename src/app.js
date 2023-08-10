const express = require('express');
const app = express();


app.use(express.static('src/public'));

const PORT = 3000

// app.get('/', (req,res)=>{
//     res.sendFile(__dirname + '/views/home.html');
// });
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/headerFooter.html');
});

app.get('/productDetail', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});

app.get('/productCart', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});


app.listen(PORT, ()=>{
    console.log(`PORT: ${PORT}`);
});