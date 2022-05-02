var assert  = require('chai').assert;
var comment_mapper = require('../../app/services/comment_mapper');

describe('Mapping regarding comments', function() {
	it('maps according to the needs of the front end', function() {
		time_now = Date.now()
		comment_from_backend = {
			username: "username",
			picture_url: "picture_url",
			created_at: time_now,
			content: "content",
			id: "1"
		}
		expected_comment_for_frontend = {
			commentor: "username",
			commentor_avatar_url: "picture_url",
			time_since: Date.now() - time_now,
			content: "content",
			comment_id: "1"
		}

		result = comment_mapper.map(comment_from_backend)

		assert.equal(expected_comment_for_frontend.commentor, result.commentor)
		assert.equal(expected_comment_for_frontend.picture_url, result.picture_url)
		assert.equal(expected_comment_for_frontend.created_at, result.created_at)
		assert.equal(expected_comment_for_frontend.content, result.content)
		assert.equal(expected_comment_for_frontend.comment_id, result.comment_id)
	});
});
