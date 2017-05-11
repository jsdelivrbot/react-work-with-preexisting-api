import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPost, deletePost } from '../actions';

class PostsShow extends Component {

  constructor(props) {
    super(props);

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.fetchPost(id);
    }
  }

  handleDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <section>Loading...</section>;
    }

    return (
      <section>
        <Link className="btn btn-primary" to="/">Back to Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={ this.handleDeleteClick }
        >
          Delete Post
        </button>
        <h3>{ post.title }</h3>
        <h6>Categories: { post.categories }</h6>
        <p>{ post.content }</p>
      </section>
    );
  }

}

function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id],
  };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
