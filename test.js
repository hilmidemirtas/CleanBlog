const mongoose = require('mongoose');

const schema = mongoose.Schema;

//Connect

mongoose.connect('mongodb://localhost//CleanBlog');

//Create Schema

const PostSchema ({
    title: String,
    detail: String,
    dateCreated: Date(default now)
});

const Photo = mongoose.model('Post', PostSchema)

//Create a post