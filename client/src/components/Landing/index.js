import './index.css'
import React from 'react'
import { Box, Grid, Card, CardContent } from '@material-ui/core'
import { BsFillEyeFill, BsFillCalendarFill } from 'react-icons/bs'
import { FaBrain } from 'react-icons/fa'

const Landing = () => {
  return (
    <React.Fragment>
      <Box className="hero-header">
        <Grid container className="hero-header-grid">
          <Grid item xs={12} sm={8}> 
            <div className="hero-header-text">
              <h1> Moonshot </h1>
              <h3> Learn how to invest in crypto, build and track your portfolio and stay on top of current market trends. </h3>
            </div>
          </Grid>

        </Grid>

      </Box>

      <Box className="about">
        <Grid container className="about-grid-container">

          <Grid item xs={12} sm={4}>
            <Card className="about-card">
              <CardContent className="card-content">
                <div className="about-card-icon"> <BsFillCalendarFill/> </div>
                <h2> Stay up to date </h2>
                <br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nam libero justo laoreet sit amet cursus sit amet. Viverra nam 
                libero justo laoreet sit amet cursus sit. 
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className="about-card">
              <CardContent className="card-content">
                <div className="about-card-icon"> <FaBrain/> </div>
                <h2> Learn how to invest </h2>
                <br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nam libero justo laoreet sit amet cursus sit amet. Viverra nam 
                libero justo laoreet sit amet cursus sit. 
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Card className="about-card">
              <CardContent className="card-content">
                <div className="about-card-icon"> <BsFillEyeFill/> </div>
                <h2> Monitor your assets </h2>
                <br/>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Nam libero justo laoreet sit amet cursus sit amet. Viverra nam 
                libero justo laoreet sit amet cursus sit. 
                </p>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Landing;
