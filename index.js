const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig['development'])
const comment_mapper = require('./services/comment_mapper');
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let current_user = {
  id: 1000,
  username: "Darth Vader",
  picture_url: "https://image.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-600w-239338216.jpg",
}

app.post("/comment/create",function(req,res){
  knex('comments')
  .insert({
    content: req.body.comment_content, 
    user_id: current_user.id,
    upvote_count: 0,
    created_at: Date.now(),
    updated_at: Date.now()
  })
  .then((what) => {
    console.log("what")
    console.log(what)
    res.redirect('/');
  })
});

app.get('/', (req, res) => {
  knex('users')
  .innerJoin('comments', 'users.id', 'comments.user_id')
  .select('users.username', 'users.picture_url', 'comments.created_at', 'comments.content', 'comments.upvote_count')
  .then((comments) => {
    return res.render('index', {
      comments: comments.map(comment_mapper.map)
    });
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
