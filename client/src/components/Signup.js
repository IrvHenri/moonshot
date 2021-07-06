import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  return (
    <div className="login-section">
      <div className="login-form">
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
          <div>
            <Button fullWidth color="primary" type="submit" variant="contained">
              Sign Up
            </Button>
          </div>
        </form>
        <Link className="signup-link" to={"/login"}>
          <div className="signup-btn">
            <Button fullWidth color="primary">
              Already A User? Log In!
            </Button>
          </div>
        </Link>
      </div>
      <img className="login-img" src="img/stock_signup.jpg" alt="signup logo" />
    </div>
  );
};

export default Login;
