import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./pages/Header"


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={ Header } />
      {/* <Route exact path="/About" component= { About } />
      <Route exact path="/Contact" component= { Contact } />
      <Route exact path="/Inventory" component= { Inventory } />
      <Route exact path="/Featured" component= { Featured } /> */}
      </div>
    </Router>
  );
}

export default App;
