const express = require('express');

const app = express();


//middleware

app.use(express.static('public'));

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.send(blog)
});

const port = 3000;

app.listen(port, () => {
    console.log(`sunucu ${port}'da başlatıldı..`)
});

