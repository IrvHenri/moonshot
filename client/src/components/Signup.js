import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Box } from "@material-ui/core";

import axios from 'axios'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("");

    if (!confirmPw) {
      setError("Please confirm password")
      return;
    }

    if (password !== confirmPw) {
      setError("Passwords do not match")
      return;
    }

    const user = {
      name,
      email,
      password
    }
    
    axios.post("http://localhost:3001/api/users/signup", user)
    .then((res) => window.location = "/login")
    .catch((err) => {
      let error = err.response.data;
      setError(error)
    })
  }

  return (
    <Grid container className="login-section">
      <Grid item xs={12} sm={6} className="login-form">
        <h1>Sign Up</h1>
        <form>
          <div>
            <TextField
              fullWidth
              label="Name"
              name="name"
              size="small"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPw"
              size="small"
              type="password"
              variant="outlined"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
            />
          </div>
          <div className="signup-buttons">
            <Button onClick={(e) => handleSubmit(e)} fullWidth color="primary" type="submit" variant="contained">
              Sign Up
            </Button>
            <Link className="signup-link" to={"/login"}>
              <div className="signup-btn">
                <Button fullWidth color="primary">
                  Already A User? Log In!
                </Button>
              </div>
            </Link>
            <div> {error} </div>
          </div>
        </form>

      </Grid>

      <Grid item xs={12} sm={6}>
        <img className="login-img" src="img/stock_signup.jpg" alt="signup logo" />
      </Grid>
    </Grid>
  );
};

export default Signup;
