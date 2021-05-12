import React, { Component } from 'react';

class SelectedGif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <img src={src} alt="selected gif" width="300px" />
    );
  }
}

export default SelectedGif;