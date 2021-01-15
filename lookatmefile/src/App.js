import Home from './components/Home';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>

        <div className="header">
          <input type="search" />
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </div>
    
        <hr />
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>

        <Footer />  
      </Router>
    </div>
  );
}

export default App;