const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const ejs = require("ejs");

const app = express();

//Connect DB
mongoose.connect("mongodb://localhost/CleanBlog");

//template
app.set("view engine", "ejs");

//middlewares

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", async (req, res) => {
  const posts = await Post.find({});
  res.render("index", {
    posts,
  });
});
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});


app.post("/pos", async (req, res) => {
  await Post.create(req.body);
  res.redirect("/");
});

app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render("post", {
      post
    });
  });

const port = 3000;

app.listen(port, () => {
  console.log(`sunucu ${port}'da başlatıldı..`);
});
