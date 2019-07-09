import React, {Component} from 'react';
import PlayerCard from "./PlayerCard";

class Game extends Component{
  constructor(){
    super();
    this.signs =["rock","paper","scissors"]
    this.state={
      playerOne: "rock",
      playerTwo: "rock",
      winner: "DRAW",
    }
  }



playGame = () => {
  this.setState({
    playerOne: this.signs[Math.floor(Math.random()*3)],
    playerTwo: this.signs[Math.floor(Math.random()*3)],
  })
  console.log(this.state.playerOne, this.state.playerTwo)
  this.decideWinner()
}

decideWinner = () =>{
  let a = this.state.playerOne;
  let b = this.state.playerTwo;
    if (a === b){
      this.setState({
        winner: "DRAW"
      })
    }
    else{
      this.setState({
        winner: "someone won"
      })
    }
  }

  render(){
    return(
      <div className = "style">
        <div>
         <PlayerCard sign={this.state.playerOne} />
         <PlayerCard sign={this.state.playerTwo} />
        </div>
        <div className="winner">
        {this.state.winner}
        </div>
        <button type="button" onClick = {this.playGame}>PLAY</button>
      </div>
    )
  }
}
export default Game