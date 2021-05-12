import React, { Component } from 'react';

class SelectedGif extends Component {
  handleSelection = () => {
    if (this.props.mainGif) {
      this.props.mainGif(this.props.id);
    }
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return(
      <img src={src} alt="selected gif" width="300px" onClick={this.handleSelection} style={{cursor:'pointer'}} />
    );
  }
}

export default SelectedGif;