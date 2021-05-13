import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar.jsx';
import SelectedGif from './selected_gif.jsx'
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gif: [],
      selected: null
    };
    this.mainGif = this.mainGif.bind(this);
  }

  search = (query) => {
    giphy('dlCmMt9TlVvHUpYcpWVFa9z5I7qH919g').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
        this.setState({
          gif: res.data
        });
    });
  }

  mainGif = (id) => {
  this.setState({
      selected: id
    });
  }
  

  render() {

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchUpdate={this.search} />
            <div className="selected-gif">
              {this.state.selected ? <SelectedGif id={this.state.selected}/> : " " }
            </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifArray={this.state.gif} mainGif={this.mainGif} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;