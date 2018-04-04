import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Para from './Para.jsx';
import StateBase from "./stateBase.jsx";

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Para content="hello"/>, document.getElementById("paragraph"));
ReactDOM.render(<stateBase />,document.getElementById("stateSet"));