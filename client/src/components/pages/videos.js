import React, { Component } from 'react';

import VideoModal from './pageComponents/videoModal';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Videos extends Component {
  constructor(){
    super();
    this.state = {
      videos: [],
      search: ''
    }
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/video')
      .then(res => res.json())
      .then(videos => this.setState({videos}, () => console.log('Videos fetched..',
      videos)));
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0, 20)});
  }

  render() {
    let filteredVideos = this.state.videos.filter(
      (video) => {
        return (video.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1);
      }
    );

    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Videos </h1>
          <p> I will simplify advanced problems in these videos, showing you the step by step method to solving them! </p>
          <div id="borderLeft"></div>
        </div>

        <div className="videoContainer">
          <input className="searchVideos" type="text" value={this.state.search}
          onChange={this.updateSearch.bind(this)}/>
          <div className="videoGallery">

            {filteredVideos.map(video =>
              <li className="videoList" key={video.id}> <VideoModal
              title={video.name} imgSrc={video.picture} vidSrc={video.link}
              vidChs={video.chapter} vidQs={video.question}/></li>
            )}

          </div>
        </div>
      </div>
    );
  }
}

export default Videos;






















/////
