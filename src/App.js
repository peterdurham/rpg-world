import React, { Component } from 'react';

import './sass/main.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Platforms from './components/Platforms/Platforms';
import TopGames from './components/TopGames/TopGames';
import Store from './components/Store/Store';

var games = require('./games');
var news = require('./news');


class App extends Component {
  state = {
    games: [],
    news: [],
    display: [false, false, false, true, false]
  }
  
  componentDidMount = () => {
    this.setState(()=>({ news , games}))
  }

  loadPageHandler = (indexToShow) => {
    let display = [...this.state.display];
    display = display.map(item => false);
    display[indexToShow] = true;
    this.setState(() => ({display}))
  }

  render() {
    let home = (this.state.display[0] === true) ?
    <Home news = {this.state.news} games = {this.state.games} /> : null
    let reviews = (this.state.display[1] === true) ?
    <Reviews /> : null
    let platforms = (this.state.display[2] === true) ?
    <Platforms /> : null
    let topgames = (this.state.display[3] === true) ?
    <TopGames games = {this.state.games} /> : null
    let store = (this.state.display[4] === true) ?
    <Store /> : null

    return (
      <div className="App">
        <Header />
        <Navigation loadPage = {this.loadPageHandler} />
        {home}
        {reviews}
        {platforms}
        {topgames}
        {store}
      </div>
    );
  }
}

export default App;
