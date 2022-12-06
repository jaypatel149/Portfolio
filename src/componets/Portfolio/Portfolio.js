import "./Portfolio.css";
import { Container, Box, Typography, Link } from "@mui/material";

import IMG1 from "../../assets/Best.jpg";
import IMG2 from "../../assets/freshly.jpg";
import IMG3 from "../../assets/Zappos.jpg";
import IMG4 from "../../assets/Lifestyle.jpg";
import final from "../../assets/final.png";
import final1 from "../../assets/final1.png";

var data = [
  {
    id: 1,
    image: final1,
    title:
      "Everhour is a time tracker website that helps small and mid-size companies  to  organize their working hours.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/shopping_mall/",
  },

  {
    id: 2,
    image: final,
    title:
      "OverStock is a American product based organisation where you can buy home decor, furniture etc.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/shopping_mall/",
  },
  {
    id: 3,
    image: IMG4,
    title: "LifeStyleStores is a Product based website",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Myntra_website/",
  },
  {
    id: 4,
    image: IMG1,
    title: "BEST BUY is a Electronic products based web.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Electronic_web/",
  },

  {
    id: 5,
    image: IMG2,
    title: "FRESHLY is an organization who delivers food in different areas.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Vaid_G_UI/",
  },
  {
    id: 6,
    image: IMG3,
    title: "Ecommerce web. provides clothes and Major know for Footwear.",
    github: "https://github.com/jaypatel149",
    demo: "https://jaypatel149.github.io/Vaid_G_UI/",
  },
];

const Portfolio = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
        <Typography variant="h6">My Recent Work</Typography>
        <Typography variant="h4" sx={{ color: "#f9bf8f" }}>
          Portfolio
        </Typography>
      </Box>
      <Box py={5} sx={{flexGrow: 1}} className=" portfolio__box">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <Box className="Portfolio__item-image">
                <img src={image} alt="" width="100%" />
              </Box>
              <Typography variant="h6">{title}</Typography>
              <Box sx={{marginTop:'2.5rem',display:'flex',justifyContent:'center',gap:'4rem'}}>
                <Link href={github} underline="none" color='inherit' className="btn github">
                  Github
                </Link>
                <Link href={demo} underline='none' color='inherit' className="btn btn-primary github">
                  Live Demo
                </Link>
              </Box>
            </article>
          );
        })}
      </Box>
    </Container>
  );
};

export default Portfolio;
