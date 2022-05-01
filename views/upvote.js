const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', event => {
	let comment_id = event.target.getAttribute("data-comment-id")
  fetch(`/comments/${comment_id}`, {method: 'PUT'})
	.then(function(response) {
		if(response.ok) {
			return;
		}
	})
	.catch(function(error) {
		console.log(error);
	});
}));
