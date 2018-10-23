import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Contact extends Component {
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
      message: this.refs.message.value
    }

    fetch('/Contact', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {'Content-Type':'application/json'}
    })
    .then((res) => {
      if (res.ok){
        this.resetForm();
        alert('Message sent.');
        return res.json();
      } else {
        alert('Message failed');
      }
    }).then((json) => {
      console.log(json);
    })
  };

  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> Contact </h1>
          <p> I check my Email every morning and I always try to reply to all of them! </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <div class="contactPage">
            <div class="form">
              <form id='message-form' onSubmit={this.handleSubmit.bind(this)}>
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
                  <textarea ref="message" class="form-control" rows="5" cols="80" id="message" placeholder="message"/>
                </div>
                <button type="submit">Submit!</button>
              </form>
            </div>
          </div>

          <div className="otherContact">
            <p>You can also find me on</p>
            <div className="allOtherContacts">
              <a href="https://www.facebook.com/Hokstutoring/"><i className="fa fa-facebook-square"></i></a>
              <a href="https://www.linkedin.com/in/thaihokeart/"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.youtube.com/channel/UC_T_kk-Ut_wGGM_HvNGQTrQ"><i className="fa fa-youtube-square"></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
