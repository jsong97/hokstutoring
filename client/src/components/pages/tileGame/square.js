import React, { Component } from 'react';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Square extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.setState({value: 'X'})}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
