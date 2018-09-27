import React, { Component } from 'react';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footerTitle">
          <span>HOKS TUTORING</span>
        </div>
        <div className="copyright">
          Copyright © Hok's Tutoring. All Rights Reserved. The VCAA does not endorse and is not affiliated with Hok's Tutring or hokstutoring.com. The VCAA provides the only official, up to date versions of VCAA publications and information about courses including the VCE. VCE® is a registered trademark of the VCAA.
        </div>
        <div className="builtBy">
          Designed & built with ♥ by Justin Song
        </div>
      </footer>
    );
  }
}

export default Footer;
