import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayerCard from "./components/PlayerCard";
import Footer from "./components/Footer";
import players from "./players.json";
import "./App.css";

class App extends Component {

render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <PlayerCard
          name={players[0].name}
          image={players[0].image}
        />
        <Footer />
      </div>
    );
  }
}

export default App;

