import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./sass/main.scss";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import TopGames from "./components/TopGames/TopGames";
import Store from "./components/Store/Store";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import ScrollToTop from "./components/utils/ScrollToTop";

const games = require("./data/games");
const news = require("./data/news");
const reviews = require("./data/reviews");
const top10 = require("./data/top10");

class App extends Component {
  state = {
    games: [],
    news: [],
    reviews: [],
    top10: [],

    currentSort: "all",
    selectedGame: null,
    shoppingCart: []
  };

  componentDidMount = () => {
    this.setState(() => ({
      news,
      games,
      reviews,
      top10
    }));
  };

  selectPlatformSortHandler = platformSort => {
    this.setState(() => ({
      currentSort: platformSort,
      display: [false, false, true, false]
    }));
  };

  addToCartHandler = titleToAdd => {
    let cart = [...this.state.shoppingCart];
    cart = cart.concat(titleToAdd);
    this.setState(() => ({ shoppingCart: cart }));
  };

  removeFromCartHandler = titleToRemove => {
    let cart = [...this.state.shoppingCart];
    let index = cart.indexOf(titleToRemove);
    cart.splice(index, 1);
    this.setState(() => ({ shoppingCart: cart }));
  };

  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header loadPage={this.loadPageHandler} />
            <Navigation
              loadPage={this.loadPageHandler}
              currentSort={this.state.currentSort}
              selectPlatformSort={this.selectPlatformSortHandler}
              shoppingCart={this.state.shoppingCart}
              display={this.state.display}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Home
                    {...props}
                    news={this.state.news}
                    games={this.state.games}
                    top10={this.state.top10}
                    viewDetails={this.viewDetailsHandler}
                  />
                )}
              />
              <Route
                exact
                path="/reviews"
                render={props => (
                  <Reviews
                    {...props}
                    reviews={this.state.reviews}
                    top10={this.state.top10}
                    viewDetails={this.viewDetailsHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                    viewDetails={this.viewDetailsHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/all"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/pc"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/playstation"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/playstation2"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/playstation3"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/playstation4"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/xbox360"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/xboxone"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/topgames/nintendoswitch"
                render={props => (
                  <TopGames
                    {...props}
                    games={this.state.games}
                    currentSort={this.state.currentSort}
                    selectPlatformSort={this.selectPlatformSortHandler}
                  />
                )}
              />
              <Route
                exact
                path="/details/:id"
                render={props => (
                  <Details
                    games={this.state.games}
                    shoppingCart={this.state.shoppingCart}
                    addToCart={this.addToCartHandler}
                    {...props}
                  />
                )}
              />

              <Route
                exact
                path="/store"
                render={props => (
                  <Store
                    {...props}
                    games={this.state.games}
                    viewDetails={this.viewDetailsHandler}
                  />
                )}
              />
              <Route
                exact
                path="/details"
                render={props => (
                  <Details
                    {...props}
                    games={this.state.games}
                    selectedGame={this.state.selectedGame}
                    addToCart={this.addToCartHandler}
                    shoppingCart={this.state.shoppingCart}
                    loadPage={this.loadPageHandler}
                  />
                )}
              />
              <Route
                exact
                path="/cart"
                render={props => (
                  <Cart
                    {...props}
                    games={this.state.games}
                    addToCart={this.addToCartHandler}
                    shoppingCart={this.state.shoppingCart}
                    removeFromCart={this.removeFromCartHandler}
                    loadPage={this.loadPageHandler}
                  />
                )}
              />
            </Switch>

            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
