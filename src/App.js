import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
