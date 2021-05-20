import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="title-div">
      <h2 className="title">Lista de tareas</h2>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

