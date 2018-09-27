import React, { Component } from 'react';

class App extends Component {
  // Initialize state
  state = { reviews: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(reviews => this.setState({reviews}, () => console.log('Reviews fetched..',
      reviews)));
  }

  render() {
    const { revoews } = this.state;
    return (
      <div className="App">
        <div>
          <h2>Reviews</h2>
          <ul>
            {this.state.reviews.map(review =>
              <li key={review.id}> {review.firstName} {review.lastName}</li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
