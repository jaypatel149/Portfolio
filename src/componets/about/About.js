import "./about.css";
import { Container,Box,Typography,Link,CardMedia  } from "@mui/material";
import ME from "../../assets/jayp.jpg";


export const About = () => {
  return (
   <Container >
      <Typography sx={{textAlign:'center',fontSize:'1rem',marginBottom:'1rem'}} variant="h6">Get TO Know</Typography>
      <Typography align="center" mb={2} variant="h5">About Me</Typography>
      <Box className="grid">
        <Box className="about">
            <Box className="about_me">
              <CardMedia
              className="image"
              component="img"
              image={ME}
              alt="about me"
              />
            </Box>
         </Box>
         <Box className="about_content">
              <Typography variant="p" className="p">Hello 👋 I am a React Js Developer, passionate about working  on exciting projects
                 that test what I've learnt, whilst being exposed to the power and potential 
                of the ever-evolving technologies around us. I'm always looking for better, and more importantly, 
                accessible ways to solve the common problems we are faced with day-to-day.
              </Typography>
              <Typography pt={5}>
              <Link href="#contact" underline="none" color="inherit" className="btn btn-primary">Let's Talk</Link>
              </Typography>
         </Box>
      </Box>
   </Container>
  )
};
