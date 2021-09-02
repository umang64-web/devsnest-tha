import React from "react";
import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Home = ({ loggedin, setLogin, loginstat, setLoginstat }) => {
  return (
    <div className="home">
      This is the homepage
      <div>
        <button
          onClick={(e) => {
            loggedin
              ? setLoginstat("Logging Out...")
              : setLoginstat("Logging In...");
            setTimeout(() => {
              loggedin
                ? (setLogin(false), setLoginstat("Login"))
                : (setLogin(true), setLoginstat("Logout"));
            }, 1500);
          }}
        >
          {loginstat}
        </button>
      </div>
    </div>
  );
};

const About = () => {
  return <div className="about">This is the About page</div>;
};

const Profile = () => {
  return <div className="profile">This is the Profile page</div>;
};

const Dashboard = () => {
  return <div className="dashboard">This is the Dasboard</div>;
};

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link className="link" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <div>
        <Link className="link" to="/profile">
          Profile
        </Link>
      </div>
      <div>
        <Link className="link" to="/dashboard">
          Dashboard
        </Link>
      </div>
    </nav>
  );
};



function App() {
  const [loggedin, setLogin] = useState(false);
  const [loginstat, setLoginstat] = useState("Login");
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            {loggedin ? <Profile /> : <Redirect to="/" />}
          </Route>
          <Route path="/dashboard">
            {loggedin ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/">
            <Home
              loggedin={loggedin}
              setLogin={setLogin}
              loginstat={loginstat}
              setLoginstat={setLoginstat}
            />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
