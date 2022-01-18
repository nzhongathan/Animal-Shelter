import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About_Us'
import Animals from './components/Animals'
import Request from './components/Request'
import NavBar from './components/NavBar'
import Adding from './components/Adding'
import Login from './components/Login'
import { BrowserRouter, Switch, Route, Link } from  'react-router-dom'


function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <div>
          <Switch>
            <Route path = "/About">
              <About />
            </Route>
            <Route path = "/Animals">
              <Animals />
            </Route>
            <Route path = "/Request">
              <Request />
            </Route>
            <Route path = "/Adding">
              <Adding />
            </Route>
            <Route path = "/User">
              <Login />
            </Route>
            <Route path = "/">
              <Home />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
