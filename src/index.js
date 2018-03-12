import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Main/>
    </Provider>
  </MuiThemeProvider>
  ,
  document.getElementById('root')
);