import "./index.css";
import React from "react";
import { Box, Grid } from "@material-ui/core";

const Landing = () => {
  
  return (
    <React.Fragment>
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
            </div>
          </Grid>
        </Grid>
      </Box>

    </React.Fragment>
  );
};

export default Landing;
