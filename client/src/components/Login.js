import "./Login.css"
import { useState } from "react";
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return <div className='login-section'>
    <img className="login-img" src="img/stock_login.jpg" />
    <div className='login-form'>
    <h1>Log In</h1>
    <form>
      <div>
      <TextField 
       fullWidth
       label="Email" 
       name="email" 
       size="small" 
       variant="outlined" />
      </div>
      <div>
      <TextField
        fullWidth
        label="Password"
        name="password"
        size="small"
        type="password"
        variant="outlined" />
      </div>
      <div>
      <Button fullWidth color="primary" type="submit" variant="contained">
        Log in
      </Button>
      </div>

      </form>
      <Link className='signup-link' to={"/signup"}>
        <div className='signup-btn'>
          <Button fullWidth color="primary">
            Not A User Yet? Sign Up!
          </Button>
        </div>
      </Link>
    </div>
  </div>
}

export default Login;