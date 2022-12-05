import React from "react";
import { About } from "./componets/about/About";
import Contact from "./componets/contact/Contect";
import Experience from "./componets/experience/Experience";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Navbar from "./componets/navbar/Navbar";
import Portfolio from "./componets/Portfolio/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Navbar/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
