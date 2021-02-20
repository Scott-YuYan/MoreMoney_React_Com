import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

const Main = styled.div`
  border: 1px solid red;
  flex-grow: 1;
`;

const Nav = styled.div`
  border: 1px solid green;
  > ul {
    display: flex;
    > li {
      width: 33.33333%;
      text-align: center;
      margin: 16px;
    }
  }
`;

const Wrapper = styled.div`
  border: 1px solid black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Redirect exact from="/" to="default" />
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </Main>
          <Nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            <hr />
          </Nav>
        </Wrapper>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default App;
