import React, { Component } from 'react';
import RightArrow from './rightArrow';
import LeftArrow from './leftArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1,
      reviews: []
    }

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
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
      <div className="slider">

        {/* Slides go here */}
        { this.state.slideCount === 1 ?
          (<div className="reviews">
            {this.state.reviews.slice(0, 1).map(reviews =>
              <div className="reviewBox">
                <div className="reviewer">
                  <h3 key={reviews.id}> {reviews.firstName} {reviews.lastName}</h3>
                  <p key={reviews.id}> {reviews.title} </p>
                </div>
                <div className="reviewContent">
                  <br />
                  <p key={reviews.id}> {reviews.content} </p>
                </div>
              </div>
            )}
          </div>) : null }
          { this.state.slideCount === 2 ?
            (<div className="reviews">
              {this.state.reviews.slice(1, 2).map(reviews =>
                <div className="reviewBox">
                  <div className="reviewer">
                    <h3 key={reviews.id}> {reviews.firstName} {reviews.lastName}</h3>
                    <p key={reviews.id}> {reviews.title} </p>
                  </div>
                  <div className="reviewContent">
                    <br />
                    <p key={reviews.id}> {reviews.content} </p>
                  </div>
                </div>
              )}
            </div>) : null }
            { this.state.slideCount === 3 ?
              (<div className="reviews">
                {this.state.reviews.slice(2, 3).map(reviews =>
                  <div className="reviewBox">
                    <div className="reviewer">
                      <h3 key={reviews.id}> {reviews.firstName} {reviews.lastName}</h3>
                      <p key={reviews.id}> {reviews.title} </p>
                    </div>
                    <div className="reviewContent">
                      <br />
                      <p key={reviews.id}> {reviews.content} </p>
                    </div>
                  </div>
                )}
              </div>) : null }

        {/* Arrow Functionality */}
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />

      </div>
    );
  }

  // I have ocd sometimes and put my functions below the JSX. You can put them above if you'd like.
  nextSlide() {
      this.setState({ slideCount: this.state.slideCount + 1 })
      if ((this.state.slideCount) == 3){
        this.setState({ slideCount: 1 })
      }
  }

  previousSlide() {
      this.setState({ slideCount: this.state.slideCount - 1 })
      if ((this.state.slideCount) == 1){
        this.setState({ slideCount: 3 })
      }
  }
}
