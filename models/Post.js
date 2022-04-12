const mongoose = require('mongoose');

const Schema = mongoose.Schema;

/* Connect

mongoose.connect('mongodb://localhost/CleanBlog'); */

//Create Schema

const PostSchema = new Schema ({
    title: String,
    detail: String,
    image: String,
    dateCreated: {
        type: Date,
        default: Date.now
    } 
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;

