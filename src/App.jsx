import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
