var expect  = require('chai').expect;
var request = require('request');

describe('Landing page says Hello, world from HTML!', function() {
	var url = 'http://localhost:3000';

	it('returns status 200', function() {
		request(url, function(error, response, body) {
			expect(response.statusCode).to.equal(200);
		});
	});

	it('returns the text', function() {
		request(url, function(error, response, body) {
			expect(body).to.include('Hello, world from HTML!');
		});
	});
});
