const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Connect

mongoose.connect('mongodb://localhost/CleanBlog');

//Create Schema

const PostSchema = new Schema ({
    title: String,
    detail: String,
});

const Post = mongoose.model('Post', PostSchema)

//Create a post
Post.create({
    title: "resim 1",
    detail: "ilk resim",
})
