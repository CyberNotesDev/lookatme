import 'react-router-dom';
import './../css/LogIn.css';

function LogIn() {
    return (
      <div className="login">
        <div className="form-container">
          <h2>Welcome :)</h2>
          <form>
            <label>Email</label>
            <input type="text" /> 
            <br />
            <label>Password</label>
            <input type="password" />
          </form>
          <h1>Forgot Password</h1>
          <h1>Log In</h1>
        </div>
      </div>
    );
  }
  
export default LogIn;