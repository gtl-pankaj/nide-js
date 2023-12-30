const express = require('express');
const path = require('path');

const app = express();
const dirPath = path.join(__dirname, 'inner');

app.set('view engine','ejs');

// app.use(express.static(dirPath));
app.get('/profile',(req, res) => {
    const user = {
        name : "Pankaj",
        email:"pankaj@gmail.com",
        contact:1234567890,
        skills:["php","js","node"],
    }
    res.render('profile',{user:user});
})
app.get('/login',(req, res) => {
    res.render('login',);
});
app.get('/about',(req, res) => {
    res.sendFile(`${dirPath}/about.html`);
})
app.get('/contact',(req, res) => {
    res.sendFile(`${dirPath}/contact.html`);
})
app.get('*',(req, res) => {
    res.sendFile(`${dirPath}/404.html`);
})
app.listen(3939);