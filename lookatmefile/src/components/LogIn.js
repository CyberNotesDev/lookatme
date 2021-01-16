import 'react-router-dom';
import './../css/LogIn.css';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// Work on Help Page
function LogIn() {
    return (
      <Router>
        <div className="login">
          <div className="form-container">
            <h2>Welcome :)</h2>
            <form action="/account.js" method="POST">

              <label>Email</label>
              <input type="text" required /> 
              <br />
              <label>Password</label>
              <input type="password" pattern=".{8,}" required />
              
              <div className="logandforgot">
                <Link to="/help">Forgot Password</Link>
                <button type="submit">Log In</button>
              </div>

            </form>
          </div>
        </div>
      </Router>
    );
  }
  
export default LogIn;