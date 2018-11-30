import React, { Component } from 'react';

import './sass/main.scss';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';

import TopGames from './components/TopGames/TopGames';
import Store from './components/Store/Store';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';

var games = require('./games');
var news = require('./news');
var reviews = require('./reviews');
var top10 = require('./top10');


class App extends Component {
  state = {
    games: [],
    news: [],
    reviews: [],
    top10: [],
    display: [false, false, false, true, false, false],
    //Sorts: All, PC, Playstation 1-4, Xbox 360/One, Nintendo Switch
    currentSort: [true, false, false, false, false, false, false, false, false],
    selectedGame: null,
    shoppingCart: []
  }
  
  componentDidMount = () => {
    this.setState(()=>({ news , games , reviews, top10}))
  }

  loadPageHandler = (indexToShow) => {
    let display = [...this.state.display];
    display = display.map(item => false);
    display[indexToShow] = true;
    this.setState(() => ({display}))
  }
  selectPlatformSortHandler = (platformSort) => {
      this.setState(()=>({currentSort:platformSort, display: [false, false, true, false]}));
  }
  
  viewDetailsHandler = (titleToView) => {
    this.setState(()=>({selectedGame: titleToView, display: [false,false,false,false,true]}))
  }
  addToCartHandler = (titleToAdd) => {
    let cart = [...this.state.shoppingCart];

    cart =cart.concat(titleToAdd);
    
    this.setState(()=>({shoppingCart: cart}))
  }
  removeFromCartHandler = (titleToRemove) => {
    let cart = [...this.state.shoppingCart];
    let index = cart.indexOf(titleToRemove);
    cart.splice(index,1);
    this.setState(()=>({shoppingCart: cart}));
  }


  render() {
    let home = (this.state.display[0] === true) ?
    <Home 
      news = {this.state.news}
      games = {this.state.games}
      top10 = {this.state.top10}
      viewDetails = {this.viewDetailsHandler}
     /> : null
    let reviews = (this.state.display[1] === true) ?
    <Reviews 
      reviews = {this.state.reviews}
      top10 = {this.state.top10}
      viewDetails = {this.viewDetailsHandler}
    /> : null
    
    let topgames = (this.state.display[2] === true) ?
    <TopGames 
      games = {this.state.games} 
      currentSort = {this.state.currentSort}
      selectPlatformSort = {this.selectPlatformSortHandler}
      viewDetails = {this.viewDetailsHandler}
      /> : null
    let store = (this.state.display[3] === true) ?
    <Store 
      games = {this.state.games}
      viewDetails = {this.viewDetailsHandler}
    /> : null
    let details = (this.state.display[4] === true) ?
    <Details 
      games={this.state.games}
      selectedGame={this.state.selectedGame}
      addToCart = {this.addToCartHandler}
      shoppingCart = {this.state.shoppingCart}
    /> : null
    let cart = (this.state.display[5] === true) ?
    <Cart 
      games = {this.state.games}
      addToCart = {this.addToCartHandler}
      shoppingCart = {this.state.shoppingCart}
      removeFromCart = {this.removeFromCartHandler}
    /> : null

    return (
      <div className="App">
        <Header 
          loadPage = {this.loadPageHandler}
          shoppingCart={this.state.shoppingCart}/>
        <Navigation 
          loadPage = {this.loadPageHandler} 
          currentSort = {this.state.currentSort}
          selectPlatformSort = {this.selectPlatformSortHandler} />
        
        {home}
        {reviews}
        {topgames}
        {store}
        {details}
        {cart}
      </div>
    );
  }
}

export default App;
