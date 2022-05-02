const knexConfig = require('../../db/knexfile');
const knex = require('knex')(knexConfig['development'])
const comment_mapper = require('../services/comment_mapper');

function getComment(req, res) {
	knex('comments')
  .where('id', req.params.commentId)
  .then((comment) => {
    return res.json(comment);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
}

function getComments(req, res) {
	knex('users')
  .innerJoin('comments', 'users.id', 'comments.user_id')
  .select('users.username', 'users.picture_url', 'comments.created_at', 'comments.content', 'comments.upvote_count', 'comments.id')
  .then((comments) => {
    return res.render('index', {
      comments: comments.map(comment_mapper.map)
    });
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
}

function updateComment(req, res) {
	knex('comments')
  .where('id', req.params.commentId)
  .update({
    updated_at: Date.now(),
    upvote_count: knex.raw('upvote_count + 1')
  })
  .then(() => {
    res.sendStatus(200);
  });
}

function postComment(req, res) {
	let current_user = {
		id: 1000,
		username: "Darth Vader",
		picture_url: "https://image.shutterstock.com/image-photo/san-benedetto-del-tronto-italy-600w-239338216.jpg",
	}

	knex('comments')
	.insert({
		content: req.body.comment_content, 
		user_id: current_user.id,
		upvote_count: 0,
		created_at: Date.now(),
		updated_at: Date.now()
	})
	.then(() => {
		res.redirect('/');
	});
}

module.exports = { getComment, getComments, updateComment, postComment };
