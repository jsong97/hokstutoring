import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { customers: [] }

  // Fetch passwords after first mount
  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}, () => console.log('Customers fetched..',
      customers)));
  }

  render() {
    const { passwords } = this.state;
    return (
      <div className="App">
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer =>
            <li key={customer.id}> {customer.firstName} {customer.lastName}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
