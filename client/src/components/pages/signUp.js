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

  resetForm(){
    document.getElementById('message-form').reset();
  }

  handleSubmit(event){
    event.preventDefault();
    let reqBody = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      yearlvl: this.refs.yearlvl.value,
      address: this.refs.address.value,
      interest: this.refs.interest.value
    }

    fetch('/SignUp', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {'Content-Type':'application/json'}
    })
    .then((res) => {
      if (res.ok){
        this.resetForm();
        alert("Thanks for signing up! I'll be in touch ASAP :)");
        return res.json();
      } else {
        alert('Something went wrong! Could you try again?');
      }
    }).then((json) => {
      console.log(json);
    })
  };

  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Sign Up </h1>
          <p> Start your journey now! </p>
          <div id="borderLeft"></div>
        </div>
        <div class="signUpPage">
          <div class="form">
            <form id="message-form" onSubmit={this.handleSubmit.bind(this)}>
              <div id="form-group">
                <input ref="name" class="form-control" type="text" id="name" placeholder="name"/>
              </div>
              <div id="form-group">
                <input ref="email" class="form-control" type="text" id="email" placeholder="email address"/>
              </div>
              <div id="form-group">
                <input ref="phone" class="form-control" type="text" id="phone" placeholder="phone number"/>
              </div>
              <div id="form-group">
                <input ref="yearlvl" class="form-control" type="text" placeholder="year level"/>
              </div>
              <div id="form-group">
                <input ref="address" class="form-control" type="text" placeholder="address"/>
              </div>
              <div id="form-group">
                <input ref="interest" class="form-control" type="text" placeholder="interest area (Methods/Spesh/Uni)"/>
              </div>
              <button type="submit">sign up!</button>
              <p class="message">Already registered? <a onClick={this.setRedirect}>Send us a message!</a></p>
            </form>
          </div>
        </div>
      </div>
    )
  }
};

export default SignUp;
