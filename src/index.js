import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './normalize.css';
import './style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//Google Books - Credencial: AIzaSyDBVuSeIN5_-ylBAZWbHsPV0_kuTyXTdIc
//Google Request: https://www.googleapis.com/books/v1/volumes?q=search+harry+potter