import { createStore } from 'redux';


export const buyAction = {
  type: 'INCREMENT'
};
export const sellAction = {
  type: 'DECREMENT'
};
export const exchangeRateAction = {
  type: 'UPDATE'
};

// Set Exchange Rate
let exchangeRate = 1;
// Randomize Exchange Rate: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function randomizeRate(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return exchangeRate = Math.floor(Math.random() * (max - min + 1)) + min;
};

export function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return {
      doubloons: state.doubloons + exchangeRate,
      arrrrcoins: state.arrrrcoins - 1,
      exchangeRate: exchangeRate,
    };
  }

  if (action.type === 'DECREMENT') {
    return {
      doubloons: state.doubloons - exchangeRate,
      arrrrcoins: state.arrrrcoins + 1,
      exchangeRate: exchangeRate,
    };
  }

  if (action.type === 'UPDATE') {
    randomizeRate(1, 10);
    return {
      doubloons: state.doubloons,
      arrrrcoins: state.arrrrcoins,
      exchangeRate: exchangeRate,
    }
  }
  return state;
}

export const store = createStore(reducer,
  {
    doubloons: 20,
    arrrrcoins: 0,
    exchangeRate: exchangeRate,
  },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);