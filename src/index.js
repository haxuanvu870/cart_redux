import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux';
import appReducers from './reducers/index';

const store = createStore(appReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store }>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
