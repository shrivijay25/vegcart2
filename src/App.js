import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './Components/HomePage'


function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/home" component={HomePage} />
            </Switch>
            </Router>
    </div>
  );
}

export default App;
