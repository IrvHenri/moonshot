import "./Login.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";


const Login = () => {

  const { theme } = useContext(ThemeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const useStyles = makeStyles(themes => ({
    loginButton: {
      color: theme === "light" ? "white" : "black",
      background: theme === "light" ? "#132455" : "#fec87f",
      "&:hover": {
        background: theme === "light" ? "#132455" : "#febd66"
      },
      boxShadow: "none"
    },

    loginForm: {
      "& .MuiInputLabel-outlined": {
        color: theme === "light" ? "black" : "white",
        fontWeight: "bold"
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: theme === "light" ? "black" : "white"
      },
      '& .MuiInputBase-input': {
        color: theme === "light" ? "black" : "white"
      },
      order: 2,
      [themes.breakpoints.up('sm')]: {
        order: 1
      }
    },

    loginImgGrid: {
      order: 1,
      [themes.breakpoints.up('sm')]: {
        order: 2
      }
    }
  }))

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("");

    const user = {
      email,
      password
    }
    
    axios.post("/api/users/login", user)
    .then(res => {
      localStorage.setItem("auth-token", res.data)
      window.location = '/portfolio'
    })
    .catch((err)=> {
      let error = err.response.data;
      setError(error)
    })
  }

  return (
    <Grid container className="login-section">

      <Grid item xs={12} sm={6} className={classes.loginImgGrid}>
        <img className="login-img" src="img/login.jpeg" alt="login logo" />
      </Grid>

      <Grid 
        item xs={12} sm={6}
        className={`login-form ${theme === "light" ? "login-form-light" : null}`}>

        <h1 className={`login-form-text ${theme === "light" ? "login-form-text-light" : null}`}> 
          Log In 
        </h1>
        
        <form>
          <div>
            <div className={`error ${theme === "light" ? "error-light" : null}`}> <h2> { error } </h2> </div>
            <TextField
              className={classes.loginForm}
              fullWidth
              label="Email"
              name="email"
              size="small"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                autoComplete: 'new-password',
                form: {
                  autoComplete: "off"
                }
              }}
            />
          </div>
          <div>
            <TextField
              className={classes.loginForm}
              fullWidth
              label="Password"
              name="password"
              size="small"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autocomplete="new-password"
            />
          </div>
          <div>
            <Button 
              className={classes.loginButton}
              onClick={(e) => handleSubmit(e)} 
              fullWidth type="submit"
              variant="contained"
              color="primary"
              >
              Log in
            </Button>

            <Link className="signup-link" to={"/signup"}>
              <div className="signup-btn">
                <Button fullWidth className={classes.loginButton}>
                  Not A User Yet? Sign Up!
                </Button>
              </div>
            </Link>

          </div>
        </form>
        
      </Grid>
      
    </Grid>
  );
};

export default Login;
