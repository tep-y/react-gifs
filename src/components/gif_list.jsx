import React, { Component } from 'react';
import SelectedGif from './selected_gif.jsx'

class GifList extends Component {
  render() {
    return(
      this.props.gifArray.map(gif => {
        return <SelectedGif id={gif.id} key={gif.id} mainGif={this.props.mainGif}/>
      })
    );
  }
}

export default GifList;