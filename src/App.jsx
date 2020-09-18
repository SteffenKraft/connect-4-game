import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import styled from 'styled-components';
import Main from './components/main/Main';

const StyledMain = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <Header />
      <StyledMain>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </StyledMain>
    </Router>
  );
}

export default App;
