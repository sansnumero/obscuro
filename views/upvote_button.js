const e = React.createElement;

class UpvoteButton extends React.Component {
  constructor(props) {
    super(props);
    fetch(`/comments/${this.props.comment_id}`, {method: 'GET'})
      .then(response => response.json())
      .then(data => { this.setState({upvote_count: Number(data[0].upvote_count)}) });
    this.state = { liked: false };
  }

  render() {
    return e('span', 
      { style: { display: 'inline' } }, 
      e('button',
        { onClick: () => {
            let updated_count = this.state.upvote_count + 1
            this.setState({ liked: true, upvote_count: updated_count })
            fetch(`/comments/${this.props.comment_id}`, {method: 'PUT'})
              .then(function(response) { console.log(response); });
          },
          className: "btn btn-primary"
        },
        '^'
      ),
      e("p",
        { style: { display: 'inline', padding: '5px' } }, 
        this.state.upvote_count
      )
    );
  }
}

const button_containers = document.querySelectorAll('.upvote_button_container');
button_containers.forEach(button => {
  let root = ReactDOM.createRoot(button);
  root.render(e(UpvoteButton, {comment_id: button.dataset.commentId}));
})
