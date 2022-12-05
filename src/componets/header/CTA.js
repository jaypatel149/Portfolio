import React from "react";
import {Link, Box } from '@mui/material'
import CV from '../../assets/cv.pdf'
import './Header.css';



export const CTA = () => {
  return (
    <Box sx={{marginTop:'2.5rem',display:'flex',justifyContent:'center',gap:'1.5rem'}}>
      <Link href={CV}download underline="none" color="inherit" className="btn">
      Download Resume
      </Link>
      <Link href="#contact" underline="none" color="inherit" className="btn btn-primary">
      Let's Talk
      </Link>
    </Box>
  );
};
