import React, { Component } from 'react';

import ArticleSlip from './pageComponents/articleSlip';
// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Blog extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      search: ''
    }
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/article')
      .then(res => res.json())
      .then(articles => this.setState({articles}, () => console.log('Articles fetched..',
      articles)));
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredArticles = this.state.articles.filter(
      (article) => {
        return (article.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
      }
    );

    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Blog </h1>
          <p> Some of my thoughts on some of the toughest roadblocks that students face learning Math! </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <div className="articleGallery">

            {filteredArticles.map(article =>
              <li className="videoList" key={article.id}> <ArticleSlip
              title={article.title} picture={article.picture}
              author={article.author} description={article.description}/></li>
            )}

          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
