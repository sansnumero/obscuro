const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
let comment = require('./app/routes/comment');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('views'));

app.route("/comment/create")
  .post(comment.postComment);

app.route("/comments/:commentId")
  .put(comment.updateComment);

app.route("/")
  .get(comment.getComments);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
