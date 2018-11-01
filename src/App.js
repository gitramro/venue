import React, { Component } from 'react';
import './resources/styles.css';

import Header from './Components/Header/Header_Footer/Header';
import Featured from './Components/Featured';
import VenueInfo from './Components/VenueInfo';
import Highlight from './Components/HighLight';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
      </div>
    );
  }
}

export default App;
