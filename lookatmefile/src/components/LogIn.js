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
          <a href="#">Back</a>
          <a href="#">Forgot Password</a>
          <a href="#">Log In</a>
        </div>
      </div>
    );
  }
  
export default LogIn;