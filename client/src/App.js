import React, { Component } from 'react';
import Slider from './components/pages/reviews/slider';

class App extends Component {
  // Initialize state
  state = {
    reviews: [],
    customers: []
  }

  // Fetch passwords after first mount
  // componentDidMount(){
  //   Promise.all([
  //     fetch('/api/reviews'),
  //     fetch('/api/customers')
  //   ])
  //   .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
  //   .then(([reviews, customers]) => this.setState({
  //       reviews: reviews,
  //       customers: customers
  //   }));
  // }
  componentDidMount() {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(reviews => this.setState({reviews}, () => console.log('Reviews fetched..',
      reviews)));
  }

  render() {
    return (
      <div className="App">
        <div>
          <h2>Reviews</h2>
          <ul>
            {this.state.reviews.map(review =>
              <li key={review.id}> {review.firstName} {review.lastName}</li>
            )}
          </ul>
          <h2> Customers </h2>
          <ul>
            <Slider />
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
