import 'react-router-dom';

function LogIn() {
    return (
      <div>
        <div className="form-container">
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