import React, { Component } from 'react';
import Badass from '../../Assets/hokBadass.jpg';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class AboutMe extends Component {
  render() {
    return (
      <div className="container">
        <div className="componentTitle">
          <h1> About Me </h1>
          <p> Just a small introduction about who I am and why I decided to teach Math :)! </p>
          <div id="borderLeft"></div>
        </div>

        <div className="content">
          <div className="biography">
            <div className="introduction">
              Hi! My name is Thaihok Eart, I graduated in 2015 achieving an ATAR of <br/>
              <p>99.40</p><p>🌟</p> with a raw study score of 47 in Specialist and 44 in Methods.
            </div>
            <div className="biographyContent">
              <p>I have a 🔥burning🔥 passion for anything Maths and I want to help every other students ignite their passion for this glorious subject (weirdooo). In order to achieve this, I have decided to take up tutoring and on a fun note, create videos on tips and tricks to help you ace your Maths studies!<br/><br/>I have been tutoring for a year now and hope to keep this up for a longer time. My dream would be to see all my students achieve success in their maths endeavour (and possibly learn to enjoy maths along the way!)<br/><br/>Have a look around the website and maybe you might find a golden nugget or two.<br/><br/>Cheers!<br/>Hok<br/></p>
              <img src={Badass} alt="HokIsSoCool"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
