import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { searchRobots, requestRobots } from './reducers';
import { combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import App from './container/App';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
})

const store = configureStore({
  reducer: rootReducer,
  middleware:[logger, thunkMiddleware]
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
