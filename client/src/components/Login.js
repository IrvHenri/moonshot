import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("");

    const user = {
      email,
      password
    }
    
    axios.post("http://localhost:3001/api/users/login", user)
    .then(res => {
      localStorage.setItem("auth-token", res.data)
      window.location = '/'
    })
    .catch((err)=> {
      let error = err.response.data;
      setError(error)
    })
  }

  return (
    <div className="login-section">
      <img className="login-img" src="img/stock_login.jpg" alt="login logo" />
      <div className="login-form">
        <h1>Log In</h1>
        <form>
          <div>
            <TextField
              fullWidth
              label="Email"
              name="email"
              size="small"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Password"
              name="password"
              size="small"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button onClick={(e) => handleSubmit(e)} fullWidth color="primary" type="submit" variant="contained">
              Log in
            </Button>
          </div>
        </form>
        <Link className="signup-link" to={"/signup"}>
          <div className="signup-btn">
            <Button fullWidth color="primary">
              Not A User Yet? Sign Up!
            </Button>
          </div>
        </Link>
        <div> { error } </div>
      </div>
    </div>
  );
};

export default Login;
