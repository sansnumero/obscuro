module.exports = {
	map: function(comment) {
		return {
			commentor: comment.username,
			commentor_avatar_url: comment.picture_url,
			time_since: Date.now() - comment.created_at,
			content: comment.content,
			upvote_count: comment.upvote_count,
			comment_id: comment.id
		};
	}
};
