import React from 'react';
import {Link} from 'react-router-dom';
import './intro.css';

export default function Intro() {

  return (
    <div className="intro">
      <h1>7 MILLION PAINTINGS</h1>
      <p>This app composes computer generated art.</p>
      <p>Enjoy never before seen art and save images you like to your gallery.</p>
      <p>Make prints, business cards, &amp; logo designs with images from your gallery, coming soon...</p>
      <p>DEMO USER: yaka/pass</p>
      <button id="sign-up" type="submit">
        <Link id="btn" to={ {pathname: '/signup'} }>SIGN UP</Link>
      </button>
      <button id="login">
        <Link id="btn" to={ {pathname: '/login'} }>LOG IN</Link>
      </button>
    </div>
  );
}
