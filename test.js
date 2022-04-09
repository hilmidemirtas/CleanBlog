const mongoose = require('mongoose');

const schema = mongoose.Schema;

//Connect

mongoose.connect('mongodb://localhost/CleanBlog');

//Create Schema

const PostSchema ({
    title: String,
    detail: String,
    dateCreated: Date(default now)
});

const Post = mongoose.model('Post', PostSchema)

//Create a post
Post.create({
    title: resim 1,
    detail: ilk resim,
    dateCreated: Date(default now)
})
