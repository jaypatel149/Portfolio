import React from "react";
import { CTA } from "./CTA";
import ME from "../../assets/jay1.jpg";
import "./Header.css";
import { Box, Typography, Container, Grid } from "@mui/material";

function Header() {
  return (
    <Container>
      <Grid container spacing={3} py={5}>
        <Grid item xs={12} lg={6}>
          <Box sx={{ textAlign: "center"}}>
            <Typography variant="h6" mb={1}>
              Hello 👋🏻 I'm
            </Typography>
            <Typography variant="h4" my={1}>
              Jay Patel
            </Typography>
            <Typography variant="h5" mb={1}>
              Frontend Developer &nbsp;(React Js)
            </Typography>
            <CTA />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box className="me">
            <img src={ME} alt="mine" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
