import React, { Component } from 'react';

import Header from './components/header/Header'
import Main from './components/main/Main'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      basket: 0
    }
  }

  updateBasket(qty) {
    this.setState({
      basket: qty
    })
  }

  render() {
    return (
      <div className="App">
        <Header basket={this.state.basket} />
        <hr />
        <Main updateBasket={this.updateBasket.bind(this)} />
      </div>
    );
  }
}

export default App;
