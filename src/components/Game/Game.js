import React, { Component } from "react";
import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";
import Section from "../Section";
import PlayerCard from "../PlayerCard";
import Footer from "../Footer";
import players from "../../players.json";

class Game extends Component {
  state = {
    players,
    score: 0,
    topScore: 0,
    guessed: []
  };

  componentDidMount() {
    this.setState({ players: this.shufflePlayers(this.state.players) });
  }

  // function to shuffle player cards
  shufflePlayers = a => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // function to handle when a user clicks on a player
  handleClick = id => {
    // if clicked player is not an index of array
    if (this.state.guessed.indexOf(id) === -1) {
      if (this.state.score === 12) {
        this.setState({ score: 0 });
        this.setState({ guessed: [] });
      } else {
        //push into guessed array
        this.state.guessed.push(id);
        // increment score
        this.setState({ score: this.state.score + 1 });
      }

      // shuffle cards
      this.shufflePlayers(this.state.players);
    } else {
      // if clicked player is an index of the array score will reset array will empty and score will be checked with total score
      // show top score
      this.setState({ topScore: this.state.score });
      // reset score
      this.setState({ score: 0 });
      this.setState({ guessed: [] });
      // shuffle cards ??
    }
    console.log(this.state.guessed);
  };

  render() {
    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <Section>
          {this.state.players.map(player => (
            <PlayerCard
              key={player.id}
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

export default Game;
