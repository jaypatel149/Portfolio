import React from "react";
import './Experience.css'
import { Container, Box, Typography, Grid } from "@mui/material";
import REACT from "../../assets/icons/react.svg";
import JS from "../../assets/icons/java-script.svg";
import REDUX from "../../assets/icons/redux.svg";
import NODE from "../../assets/icons/node-js.svg";
import BOOTSTRAP from "../../assets/icons/bootstrap.svg";
import HTML from "../../assets/icons/html5.svg";
import GIT from "../../assets/icons/github.svg";
import CSS from "../../assets/icons/css3.svg";
import AMAZON from "../../assets/icons/aws.svg";
import MATERIAL from "../../assets/icons/mui.svg";
import PYTHON from "../../assets/icons/python.svg";
import JSON from "../../assets/icons/json-file.svg";



const Experience = () => {
  return (
    <Container>
      <Box className="text">
        <Typography variant="h6">What Skills I have</Typography>
        <Typography variant="h4" sx={{color:'#f9bf8f'}}>My Experience</Typography>
      </Box>
      <Box className="experience__box">
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={REACT} alt="react" />
              <h4>REACTJS</h4>
          </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={JS} alt="react" />
              <h4>JAVASCRIPT</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={REDUX} alt="react" />
              <h4>REDUX</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={NODE} alt="react" />
              <h4>NODEJS</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={BOOTSTRAP} alt="react" />
              <h4>BOOTSTRAP5</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={HTML} alt="react" />
              <h4>HTML5</h4>
            </article>
          </Grid>
        </Grid>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={GIT} alt="react" />
              <h4>GITHUB</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={CSS} alt="react" />
              <h4>CSS3</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={AMAZON} alt="react" />
              <h4>AMAZON</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details ">
              <img src={MATERIAL} alt="react" />
              <h4>MATERIAL UI</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={PYTHON} alt="react" />
              <h4>PYTHON</h4>
            </article>
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={2}>
          <article className="experience__details">
              <img src={JSON} alt="react" />
              <h4>JSON</h4>
            </article>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Experience;
