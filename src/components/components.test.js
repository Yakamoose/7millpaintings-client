import React from 'react';
import {shallow, mount} from 'enzyme';

import {App} from './app';
import {Art} from './art';
import {GalleryArtPiece} from './gallery-pieces';
import {Gallery} from './gallery';
import Input from './input';
import Intro from './intro';
import LogInForm from './login';
import NavBar from './nav';
import RegisterUserForm from './register-form';


describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});

describe('<Art />', () => {
  it('Renders without crashing', () => {
    shallow(<Art />);
  });
});

describe('<GalleryArtPiece />', () => {
  it('Renders without crashing', () => {
    shallow(<GalleryArtPiece />);
  });
});

describe('<Intro />', () => {
  it('Renders without crashing', () => {
    shallow(<Intro />);
  });
});

describe('<LogInForm />', () => {
  it('Renders without crashing', () => {
    shallow(<LogInForm />);
  });
});

describe('<NavBar />', () => {
  let info = {
    loggedIn: true
  };

  it('Renders without crashing', () => {
    shallow(<NavBar info={info}/>);
  });

});

describe('<RegisterUserForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterUserForm />);
  });
});
