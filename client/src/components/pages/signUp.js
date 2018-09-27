import React, { Component } from 'react';

import { Redirect } from 'react-router-dom';

class SignUp extends Component {

  state = {
    redirect: false
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/contact' />
    }
  }

  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Sign Up </h1>
          <p> Start your journey now! </p>
          <div id="borderLeft"></div>
        </div>
        <div class="login-page">
          <div class="form">
            <form class="register-form">
              {this.renderRedirect()}
              <input type="text" placeholder="name"/>
              <input type="text" placeholder="email address"/>
              <input type="text" placeholder="phone number"/>
              <input type="text" placeholder="year level"/>
              <input type="text" placeholder="address"/>
              <input type="text" placeholder="interest area (Methods/Spesh/Uni)"/>
              <button>sign up!</button>
              <p class="message">Already registered? <a onClick={this.setRedirect}>Send us a message!</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default SignUp;
