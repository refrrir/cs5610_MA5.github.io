import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/board';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/reducer';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store} >
    <Board />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
