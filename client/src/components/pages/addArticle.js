import React, { Component } from 'react';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class AddArticle extends Component {
  constructor(){
    super();
    this.state = {
      articles: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/article')
      .then(res => res.json())
      .then(articles => this.setState({articles}, () => console.log('Articles fetched..',
      articles)));
  }

  handleSubmit(event){
    event.preventDefault();
    let reqBody = {
      author: this.refs.author.value,
      picture: this.refs.picture.value,
      title: this.refs.title.value,
      description: this.refs.description.value
    }

    fetch('/addArticle', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {'Content-Type':'application/json'}
    })
    .then((res) => {
      if (res.ok){
        return res.json();
      } else {
        console.log('Something went wrong with the fetch');
      }
    }).then((json) => {
      console.log(json);
    })
  };

  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Adding Article </h1>
          <p> Add articles to the database </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="topLine">
              <div id="form-group">
                <input ref="author" class="form-control" name="author" type="text" placeholder="Enter author name"/>
              </div>
              <div id="form-group">
                <input ref="picture" class="form-control" name="picture" type="text" placeholder="Enter picture link"/>
              </div>
              <div id="form-group">
                <input ref="title" class="form-control" name="title" type="text" placeholder="Enter title name"/>
              </div>
              <div id="form-group">
                <input ref="description" class="form-control" name="description" type="text" placeholder="Enter description"/>
              </div>
              <input class="btn btn-primary" type="submit" value="Submit"/>
            </div>
          </form>


          <p> All Submitted Articles </p>
          <ul>
            {this.state.articles.map(article =>
              <li key={article.id}>{article.title}</li>
            )}
          </ul>
        </div>


      </div>
    );
  }
}

export default AddArticle;
