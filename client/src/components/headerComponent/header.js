import React, { Component } from 'react';
import logo from '../../Assets/hokLogo.jpg';

import {
  Link
} from 'react-router-dom';

// we don't need this because we're going to include this in App
// import './Assets/css/default.min.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="tutoringLogo" height="63" width="63"/>
          </Link>
        </div>
        <nav>

          <ul>
            <li className="first">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="Videos">Videos</Link>
            </li>
            <li>
              <Link to="Blog">Blog</Link>
            </li>
            <li>
              <Link to="AboutMe">About Me</Link>
            </li>
            <li className="last">
              <Link to="Contact">Contact</Link>
            </li>
          </ul>

        </nav>
      </header>
    );
  }
}

export default Header;
