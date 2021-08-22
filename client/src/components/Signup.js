import "./Login.css";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, makeStyles } from "@material-ui/core";
import { ThemeContext } from "../context/ThemeContext";

import axios from "axios";

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [errors, setErrors] = useState([]);

  const useStyles = makeStyles({
    signUpButton: {
      color: theme === "light" ? "white" : "black",
      background: theme === "light" ? "#132455" : "#fec87f",
      "&:hover": {
        background: theme === "light" ? "#132455" : "#febd66",
      },
    },

    signUpForm: {
      "& .MuiInputLabel-outlined": {
        color: theme === "light" ? "black" : "white",
        fontWeight: "bold",
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: theme === "light" ? "black" : "white",
      },
      "& .MuiInputBase-input": {
        color: theme === "light" ? "black" : "white",
      },
    },
  });

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPw,
    };

    axios
      .post("/api/users/signup", user)
      .then((res) => {
        setErrors([]);
        return (window.location = "/login");
      })
      .catch((err) => {
        let errors = err.response.data.errors.map((err) => err.msg);
        setErrors(errors);
      });
  };

  return (
    <Grid container className="login-section">
      <Grid
        item
        xs={12}
        sm={6}
        className={`login-form ${
          theme === "light" ? "login-form-light" : null
        }`}
      >
        <h1
          className={`login-form-text ${
            theme === "light" ? "login-form-text-light" : null
          }`}
        >
          Sign up
        </h1>

        <form>
          <div>
            <div
              className={`error ${theme === "light" ? "error-light" : null}`}
            >
              {errors.length > 0
                ? errors.map((error, index) => <h3 key={index}>{error} </h3>)
                : null}
            </div>

            <TextField
              className={classes.signUpForm}
              fullWidth
              label="Name"
              name="name"
              size="small"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
                required: true,
              }}
            />
          </div>
          <div>
            <TextField
              className={classes.signUpForm}
              fullWidth
              label="Email"
              name="email"
              size="small"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
              }}
            />
          </div>
          <div>
            <TextField
              className={classes.signUpForm}
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
              className={classes.signUpForm}
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
            <Button
              className={classes.signUpButton}
              onClick={(e) => handleSubmit(e)}
              fullWidth
              color="primary"
              type="submit"
              variant="contained"
            >
              Sign Up
            </Button>
            <Link className="signup-link" to={"/login"}>
              <div className="signup-btn">
                <Button fullWidth className={classes.signUpButton}>
                  Already A User? Log In!
                </Button>
              </div>
            </Link>
          </div>
        </form>
      </Grid>

      <Grid item xs={12} sm={6}>
        <img className="login-img" src="img/signup.jpeg" alt="signup logo" />
      </Grid>
    </Grid>
  );
};

export default Signup;
