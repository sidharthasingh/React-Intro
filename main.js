import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Para from './Para.jsx';
import Statebase from "./stateBase.jsx";
import LifeCycle from "./lifeCycle.jsx";

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Para content="hello"/>, document.getElementById("paragraph"));
ReactDOM.render(<Statebase />,document.getElementById("stateSet"));
ReactDOM.render(<LifeCycle />,document.getElementById("lifecycle"));