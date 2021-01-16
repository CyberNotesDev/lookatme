import Home from './components/Home';
import LogIn from './components/LogIn';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
    
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