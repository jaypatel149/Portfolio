import React from "react";
import "./Contact.css";

import {
  Grid,
  Box,
  TextField,
  InputLabel,
  Button,
  Typography,
  Link,
  Container,
} from "@mui/material";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";

const Contact = () => {
  return (
    <Container >
    <Box sx={{textAlign:'center',marginTop:'2rem'}}>
        <Typography variant="h5" >Get In Touch</Typography>
        <Typography variant="h6" py={4}>Thanks for stopping by, I’m currently looking to join a new team of creative designers and developers. If you think we might be a good fit for one another, give me a call 🇮🇳  or send me an  email</Typography>
        <Typography variant="h3" mb={1}>Don't be a stranger!!!</Typography>
    </Box>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Box  sx={{display:'flex',justifyContent:'center',margin:'3rem'}}>
            <article className="contact__option">
              <MarkEmailUnreadIcon />
              <Typography variant="h5">Email</Typography>
              <Link
                href="mailto:jaiprakash18@navgurukul.org"
                underline="none"
                color="inherit"
              >
                Send a message
              </Link>
            </article>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Box
            component="form"
            // onSubmit={}
            noValidate
            autoComplete="off"
          >
            <br />
            <br />
            <InputLabel style={{ color: '#fff' }}>FullName</InputLabel>
            <TextField
              sx={{
                borderRadius: "0.5rem",
                background: "transparent",
                border: "2px solid var(--color-primary-variant)",
                resize: "none",
              }}
              fullWidth
              id="outlined-multiline-static"
              placeholder="FullName..."
              name="fullName"
              type="text"
              //   onChange={handleChange}
              //   value={values.firstName}
            />
            <br />
            <br />
            <InputLabel style={{ color: '#fff' }}>Email</InputLabel>
            <TextField
              sx={{
                borderRadius: "0.5rem",
                background: "transparent",
                border: "2px solid var(--color-primary-variant)",
                resize: "none",
              }}
              fullWidth
              id="outlined-multiline-static"
              placeholder="Email..."
              name="email"
              type="email"
              //   onChange={handleChange}
              //   value={values.email}
            />
            <br />
            <br />
            <InputLabel style={{ color: '#fff' }}>Message</InputLabel>
            <TextField
              sx={{
                borderRadius: "0.5rem",
                background: "transparent",
                border: "2px solid var(--color-primary-variant)",
                resize: "none",
              }}
              fullWidth
              id="outlined-multiline-static"
              placeholder="Type a message..."
              name="messege"
              type="text"
              multiline
              rows={4}
              //   onChange={handleChange}
              //   value={values.messege}
            />
            <br />
            <br />
            <Typography>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                size="large"
              >
                Submit
              </Button>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contact;
