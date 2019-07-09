import React, {Component} from 'react';

class Game extends Component{
  render(){
    return(
      <div className = "style">
        <div>
          Playercards go here
         <div className = "player-cards"></div>
        </div>
        <div className="winner">Place the winner here</div>
        <button type="button">PLAY</button>
      </div>
    )
  }
}
export default Game