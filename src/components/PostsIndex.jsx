import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    const allPosts = this.props.posts;
    return Object.keys(allPosts).map((post, idx) => {
      return (
        <li className="list-group-item" key={ idx }>
          <Link to={`/posts/${allPosts[post].id}`}>
            { allPosts[post].title }
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <section>
        <article className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">Add a post</Link>
        </article>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// Passing fetchPosts action creator directly instead of using mapDispatchToProps
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);