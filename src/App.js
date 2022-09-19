import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Article from './pages/Article';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>
          <Route path="*">
            <Redirect to="/"></Redirect>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
