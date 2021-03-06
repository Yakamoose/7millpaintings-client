import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import GalleryArtPiece from './gallery-pieces';

import './gallery.css';


export class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {
    const component = this;
    const userId = localStorage.userId;
    console.log(userId);


    axios.get(`https://shrouded-castle-18641.herokuapp.com/user/${userId}`)
        .then((res) => {
          const gallery = res.data.gallery;
          console.log(res.data.gallery[0]);
          console.log(res.data.gallery[1]);

          if(res.data.gallery[0] != null) {
            const imgA = '"'+res.data.gallery[0].imgA+'"';
            const imgB = '"'+res.data.gallery[0].imgB+'"';
            component.setState({gallery, message: ''});
          }else {
            component.setState({message: 'Click 7 Million Paintings link above to save images to gallery.'})
          }
      })
    }

  render() {
    let pieces = [];
    for(let i = 0; i < this.state.gallery.length; i++) {
      pieces[i] =  <GalleryArtPiece imgA={this.state.gallery[i].imgA} imgB={this.state.gallery[i].imgB} key={i}/>;
    }

    return (
      <div className="gallery">
        <h1>{this.state.message}</h1>
        {pieces}
      </div>
    )
  }
}

export default connect()(Gallery);
