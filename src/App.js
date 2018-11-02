import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './Components/Header/Header_Footer/Header';
import Featured from './Components/Featured';
import VenueInfo from './Components/VenueInfo';
import Highlight from './Components/HighLight';
import Pricing from './Components/Pricing';
import Location from './Components/Location';
import Footer from './Components/Header/Header_Footer/Footer';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
          <Header />
        <Element name="featured">
          <Featured />
        </Element>
        <Element name="venue_info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlight />
        </Element>
        <Element name="pricing">
          <Pricing />
        </Element>
        <Element name="location">
          <Location />
        </Element>
          <Footer />
      </div>
    );
  }
}

export default App;
