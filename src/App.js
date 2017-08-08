import React, { Component } from 'react';

import Header from './components/header/Header'
import Main from './components/main/Main'

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      basket: 0,
      hamburgerIsOpen: false
    }
  }

  updateBasket(qty) {
    this.setState({
      basket: qty
    })
  }

  openHamburgerMenu() {
    this.setState({ hamburgerIsOpen: !this.state.hamburgerIsOpen })
  }

  render() {
    return (
      <div className="App">
        <Header 
          basket={this.state.basket} 
          openHamburgerMenu={this.openHamburgerMenu.bind(this)} 
          isOpen={this.state.hamburgerIsOpen} />
        <hr />
        <Main updateBasket={this.updateBasket.bind(this)} />
      </div>
    );
  }
}
