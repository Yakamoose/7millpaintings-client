import React from 'react';
import {Link} from 'react-router-dom';

import './nav.css';


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogOutClick(e) {
    e.preventDefault();
    localStorage.clear();
    // window.location clears state, and returns loggedIn value to false
    window.location = '/';
  }


  render() {
  console.log(this.props);

    if(this.props.info.loggedIn === true) {
      return (
        <nav>
          <ul>
            <li className="nav-left to-gallery">
              <Link to={'./gallery'}>GALLERY</Link>
            </li>
            <li className="nav-right to-login">
                <span onClick={this.onLogOutClick}>LOG OUT</span>
            </li>
            <li className="title">
              <Link className="glitch" to={'/art'}>7 MILLION PAINTINGS</Link>
            </li>

          </ul>
        </nav>
      );
    }
    else {
      return (
        <nav>
          <ul>
            <li className="nav-right to-login">
                <Link to={'/login'}>LOG IN</Link>
            </li>
            <li className="title">
              <Link className="glitch" to={'/'}>7 MILLION PAINTINGS</Link>
            </li>
          </ul>
        </nav>
      );
    }
  }
}
