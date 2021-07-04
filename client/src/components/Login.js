import "./Login.css"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
const Login = () => {
  return <div className='login-section'>
    <img className="login-img" src="img/stock_login.jpg" />
    <div className='login-form'>
    <h1>Log In</h1>
    <form>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField 
                fullWidth
                label="Email" 
                name="email" 
                size="small" 
                variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
          <Button fullWidth color="secondary" type="submit" variant="contained">
              Log in
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  </div>
}

export default Login;