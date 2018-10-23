import React, { Component } from 'react';

class BlogArticle extends Component {
  render() {
    return (
      <div className="blogArticle">
        <p>This is the test article for {this.props.title}</p>
      </div>
    )
  }
};

export default BlogArticle;
