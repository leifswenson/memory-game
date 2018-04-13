import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Section from "./components/Section";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";
import players from "./players.json";
import "./App.css";

class App extends Component {
  
  // Score starts at 0
  // high score will start at 0
  // empty array will hold gusses
  state = {
    score: 0,
    topScore: 0,
    guessed: []
  };

  
  // function to handle when a user clicks on a player
  handleClick = (id) => {
    
    // if clicked player is not an index of array, add to score
    if (this.state.guessed.indexOf(id) === -1) {
      //push into guessed array
      this.state.guessed.push(id);
      // increment score
      // cards will get shuffled 
      this.setState({ score: this.state.score + 1 });
    } else {
      // if clicked player is an index of the array score will reset array will empty and score will be checked with total score
      // show top score
      this.setState({topScore: this.state.score});
      // cards will get shuffled 
    }
    console.log(this.state.guessed);

    
  };





  render() {
    return (
      <div>
        <Navbar 
          score={this.score}
          topScore={this.topScore}
        />
        <Jumbotron />
          <Section>
          {players.map(player => (
            <PlayerCard
              id={player.id}
              name={player.name}
              image={player.image}
              handleClick={this.handleClick}
            />
          ))}
          </Section>
        <Footer />
      </div>
    );
  }
}




export default App;

