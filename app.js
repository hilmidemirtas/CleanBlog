const express = require('express');
const path = require('path');
/* const mongoose = require('mongoose'); */

const ejs = require('ejs');

const app = express();

//Connect
/* mongoose.connect('mongodb://localhost/CleanBlog'); */

//template
app.set("view engine", "ejs");

//middlewares

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());



//routes
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/index', (req, res) => {
    res.render('index')
});
app.get('/about', (req, res) => {
    res.render('about')
});
app.get('/add_post', (req, res) => {
    res.render('add_post')
});
app.get('/post', (req, res) => {
    res.render('post')
});

app.post('/pos', (req, res) => {
     
    console.log(req.body)

    /* res.redirect('/') */
});


const port = 3000;

app.listen(port, () => {
    console.log(`sunucu ${port}'da başlatıldı..`)
});

