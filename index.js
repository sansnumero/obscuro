const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig['development'])
const comment_mapper = require('./services/comment_mapper');

app.set('view engine', 'ejs');

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
