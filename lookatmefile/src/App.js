import LogIn from './components/LogIn';
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
            <h1>This is going to be the home page</h1>
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>

      </Router>  
    </div>
  );
}

export default App;