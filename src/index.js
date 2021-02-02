import './styles.css';
import App from './components/App';
import React from 'react';
import store from './redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);