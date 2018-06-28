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
  // it('Renders art', () => {
  //   const wrapper = shallow(<Art />);
  //   expect(wrapper.hasClass('clickText')).toEqual(true)
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

  // it('Renders title', () => {
  //   const wrapper = shallow(<NavBar info={info} />);
  //   expect(wrapper.hasClass('title')).toEqual(true);
  // })

});

describe('<RegisterUserForm />', () => {
  it('Renders without crashing', () => {
    shallow(<RegisterUserForm />);
  });
});
