import React from 'react';
import ReactDOM from 'react-dom';
// js
import App from './App';
import Tours from './Tours';

ReactDOM.render(
  <>
    {Tours.map((tour) => {
      return(<App key={id} Tours={Tours}/>)
    })}
    <App/>
  </>,
  document.getElementById('root')
);
