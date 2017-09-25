import React, { Component } from 'react';
import './App.css';

import { exchangeRateAction, buyAction, sellAction, reducer } from './store';

// Black magic, come forth
import { connect } from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    setInterval(this.props.update, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Investing in the future</h2>
          <p>Create a simple investing app using React + Redux.</p>
        </div>
        <h4>User</h4>
        <p>Doubloons: <strong> {this.props.doubloons} </strong></p>
        <p>Arrrrcoins: <strong> {this.props.arrrrcoins} </strong></p>

        <p>Exchange Rate: <strong> {this.props.exchangeRate} </strong></p>

        <button onClick={() => this.props.up()}>Buy</button>
        <button onClick={() => this.props.down()}>Sell</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    doubloons: state.doubloons,
    arrrrcoins: state.arrrrcoins,
    exchangeRate: state.exchangeRate,
  }
}

function mapActionsToProps(dispatch) {
  return {
    up: function () {
      dispatch(buyAction);
    },
    down: function () {
      dispatch(sellAction);
    },
    update: function () {
      dispatch(exchangeRateAction);
    },
  };
}

export default connect(mapStateToProps, mapActionsToProps)(App);
