import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from  './reducers/reducers';
//import Store from './store';

const Store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={Store}>
   <App />
 </Provider>,
  document.getElementById('root')
);
