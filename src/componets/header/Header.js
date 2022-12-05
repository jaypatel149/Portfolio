import React from "react";
import { CTA } from "./CTA";
import { HeaderSocial } from "./HeaderSocial";
import ME from "../../assets/jay1.jpg";
import './Header.css';
import { Box, Link, Typography, Container } from "@mui/material";



function Header() {
  return (
      <Container sx={{ height: '150vh', paddingTop:'4rem',overflow:'hidden'}}>
        <Box sx={{textAlign:'center',height:'100%',position:'relative'}}>
          <Typography variant="h6" mb={1} >Hello 👋🏻 I'm</Typography>
          <Typography variant="h4" my={1}>Jay Patel</Typography>
          <Typography variant="h5" mb={1}>Frontend Developer &nbsp;(React Js)</Typography>
          <CTA />
          <HeaderSocial />
          <Box className="me" >
            <img src={ME} alt="mine" />
          </Box>
          <Link href="#contact" underline="none" color='white' className="scroll__down">Scroll down</Link>
        </Box>
      </Container>
  );
}

export default Header;
