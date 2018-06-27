import React from 'react';
import {shallow, mount} from 'enzyme';

import {App} from './app';
import {Art} from './art';
import {GalleryArtPiece} from './gallery-pieces';
import {Gallery} from './gallery';
import Input from './input';
import NavBar from './nav';


describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });
});

describe('<Art />', () => {
  it('Renders without crashing', () => {
    shallow(<Art />);
  });
  // it('Renders art', () => {
  //   const wrapper = shallow(<Art />);
  //   expect(wrapper.hasClass('clickText')).toEqual(true);
  // });
});

describe('<GalleryArtPiece />', () => {
  it('Renders without crashing', () => {
    shallow(<GalleryArtPiece />);
  });
});

// describe('<Gallery />', () => {
//   it('Renders without crashing', () => {
//     mount(<Gallery />);
//     //error occurs because local storage is not defined
//     //look up spy/stub i.e. https://stackoverflow.com/questions/38952021/how-to-unit-test-localstorage-using-sinon
//   });
// });

// describe('<Input />', () => {
//   it('Renders without crashing', () => {
//     shallow(<Input />);
//   });
// });

describe('<NavBar />', () => {
  let info = {
    loggedIn: false
  };
  it('Renders without crashing', () => {
    shallow(<NavBar info={info}/>);
  });

  // it('Renders the title and log in buttons initially', () => {
  //   const wrapper = shallow(<NavBar info={info} />);
  //   expect(wrapper.hasClass('to-login')).toEqual(true);
  // });
});
