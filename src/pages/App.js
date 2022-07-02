import '../styles/home/styles.css'

function App() {
  return (
    <div className="container">
      <div className="login-container">
        <form className="login-form">
            <input className="login-form-input" type="text" name="username" placeholder="Username" />
            <input className="login-form-input" type="password" id="pass" name="password" minlength="8" placeholder="Password" required/>
          <input className="login-form-btn" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}

export default App;
