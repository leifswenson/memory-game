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
// User will click on a player
// if clicked player is an index of the array score will reset array will empty and score will be checked with total score
// if clicked player is not an index of array, add to score 
// 



  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
          <Section>
          {players.map(player => (
            <PlayerCard
              id={player.id}
              key={player.id}
              name={player.name}
              image={player.image}
            />
          ))}
          </Section>
        <Footer />
      </div>
    );
  }
}




export default App;

