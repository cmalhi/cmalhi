import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import allReducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  allReducers,
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
