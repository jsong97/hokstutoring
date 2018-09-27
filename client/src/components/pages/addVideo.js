import React, { Component } from 'react';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class AddVideo extends Component {
  constructor(){
    super();
    this.state = {
      videos: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/video')
      .then(res => res.json())
      .then(videos => this.setState({videos}, () => console.log('Videos fetched..',
      videos)));
  }

  handleSubmit(event){
    event.preventDefault();
    let reqBody = {
      name: this.refs.name.value,
      picture: this.refs.picture.value,
      chapter: this.refs.chapter.value,
      question: this.refs.question.value,
      link: this.refs.link.value
    }
    fetch('/addVideo', {
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
          <h1> Adding Video </h1>
          <p> Add videos to the database </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="topLine">
              <div id="form-group">
                <input ref="name" class="form-control" name="name" type="text" placeholder="Enter video name"/>
              </div>
              <div id="form-group">
                <input ref="picture" class="form-control" name="picture" type="text" placeholder="Enter picture link"/>
              </div>
              <div id="form-group">
                <input ref="chapter" class="form-control" name="chapter" type="text" placeholder="Enter chapter (if none, put 0)"/>
              </div>
              <div id="form-group">
                <input ref="question" class="form-control" name="question" type="text" placeholder="Enter question (if none, put 0)"/>
              </div>
              <div id="form-group">
                <input ref="link" class="form-control" name="link" type="text" placeholder="Enter video link"/>
              </div>
              <input class="btn btn-primary" type="submit" value="Submit"/>
            </div>
          </form>


          <p> Hello </p>
          <ul>
            {this.state.videos.map(video =>
              <li key={video.id}>{video.name}</li>
            )}
          </ul>
        </div>


      </div>
    );
  }
}

export default AddVideo;
