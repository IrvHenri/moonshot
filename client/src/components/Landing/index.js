import "./index.css";
import { Link } from "react-router-dom";
import { Box, Grid, Button, makeStyles } from "@material-ui/core";

const Landing = () => {

  const useStyles = makeStyles({
    landingButton: {
      width: "30%",
      backgroundColor: "#febd66",
      marginTop: "1%",
      text: "blue",
      color: "black",
      "&:hover": {
        color: "white"
      }
    }
  })

  const classes = useStyles();
  
  return (
      <Box className="hero-header">
        <Grid container className="hero-header-grid">
          <Grid item xs={12} sm={8}>
            <div className="hero-header-text">
              <h1> Moonshot </h1>
              <h3>
                {" "}
                Learn how to invest in crypto, build and track your portfolio
                and stay on top of current market trends.{" "}
              </h3>
              <Link to={"/signup"} style={{ textDecoration: 'none' }}>
                <Button className={classes.landingButton} variant="outlined" size="large" color="primary" >
                  GET STARTED NOW!
                </Button>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Box>
  );
};

export default Landing;
