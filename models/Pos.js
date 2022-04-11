const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Connect

mongoose.connect('mongodb://localhost/CleanBlog');

//Create Schema

const PostSchema = new Schema ({
    title: String,
    detail: String,
    Image: String,
    DdateCreated: {
        type: Date,
        default: Date.now
    } 
});