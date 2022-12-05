import "./Footer.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link,Box,Typography } from "@mui/material";


const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link href="#" color='inherit' underline="none" className="footer__logo">Home</Link>
        </li>
        <li>
          <Link href="#about" color='inherit' underline="none" className="footer__logo">About</Link>
        </li>
        <li>
          <Link href="#experience" color='inherit' underline="none" className="footer__logo">Exprience</Link>
        </li>
        <li>
          <Link href="#portfolio" color='inherit' underline="none" className="footer__logo">Portfolio</Link>
        </li>
        <li>
          <Link href="#contact" color='inherit' underline="none" className="footer__logo">Contact</Link>
        </li>
      </ul>
      <Box className="footer__socials">
      <Link href="https://www.linkedin.com/" color='inherit' underline="none" className="social"><LinkedInIcon/></Link>
      <Link href="https://www.facebook.com/" color='inherit' underline="none" className="social"><FacebookIcon/></Link>
      <Link href="https://www.instagram.com/" color='inherit' underline="none" className="social"> <InstagramIcon/></Link>
      <Link href="https://twitter.com/" color='inherit' underline="none" className="social"> <TwitterIcon/></Link>
      </Box>

      <Box className="footer__copyright">
        <Typography variant="h5">♥ Jay Patel</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
