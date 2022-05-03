const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
let comment = require('./app/routes/comment');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('views'));

app.route("/comment/create")
  .post(comment.postComment);

app.route("/comments/:commentId")
  .get(comment.getComment)
  .put(comment.updateComment);

app.route("/")
  .get(comment.getComments);

app.listen(PORT, () => {
  console.log(`App listening at ${ PORT }`);
});
