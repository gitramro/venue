import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [100, 150, 250],
    positions: ['Balcony', 'Medium', 'Star'],
    description: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
      'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et',
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    ],
    linkTo: ['http://sales/b', 'http://sales/m', 'http://sales/s'],
    delay:[500,0,500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
      <div className="pricing_item">
      <div className="pricing_inner_wrapper">
        <div className="pricing_title">
          <span>${this.state.prices[i]}</span>
          <span>${this.state.positions[i]}</span>
         </div>
        <div className="pricing_description">
          {this.state.description[i]}
        </div>
        <div className="pricing_buttons">
              <MyButton
                text={"Purchase"}
                bck={"#ffa800"}
                color={"white"}
            link={this.state.linkTo[i]}
          />
        </div> 
        
      </div> 
     </div> 
       </Zoom> 

    ))
  )


  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
           </div> 
          
         </div> 
        
      </div>
    )
  }
}

export default Pricing;