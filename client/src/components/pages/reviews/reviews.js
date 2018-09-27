import React, { Component } from 'react';
import './reviews.css';

import Slider from './slider';

class Reviews extends Component {
  constructor(){
    super();
    this.state = {
      reviews: []
    }
  }

  // use this to fetch routes in the backend
  componentDidMount() {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(reviews => this.setState({reviews}, () => console.log('Reviews fetched..',
      reviews)));
  }

  render() {
    return (
      <div>
        <div className="reviewBox">
          <div id="slider">

          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;



      // <div class="featured-projects">
      //   <div id="arrow-left" class="arrow"></div>
      //   <div id="arrow-right" class="arrow"></div>
      //   <div id="slider">
      //     <div class="slide slide1">
      //       <div class="slide-content">
      //         <a href="/explore/5/5">
      //           <span> Autumn Adventure </span>
      //         </a>
      //       </div>
      //     </div>
      //     <div class="slide slide2">
      //       <div class="slide-content">
      //         <a href="/explore/5/5">
      //           <span> the Vast Sea </span>
      //         </a>
      //       </div>
      //     </div>
      //     <div class="slide slide3">
      //       <div class="slide-content">
      //         <a href="/explore/5/5">
      //           <span> the Canyon </span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>
      // </div>
