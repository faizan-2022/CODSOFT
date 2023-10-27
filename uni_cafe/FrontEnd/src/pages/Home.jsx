import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Cards from "../components/Cards";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { lMobile, mMobile, tablet } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(55, 61, 32, 0.6), rgba(55, 61, 32, 0.6)),
    url("/images/first.jpg") no-repeat center center/cover;\
    margin-top: 0rem;
    ${tablet({height: "75vh"})}
    ${lMobile({height: "65vh"})}
    ${'' /* ${mMobile({height: "60vh"})} */}
`;

const Home = () => {
  return (
    <>
  <Container>
    <Navbar/>
    <Intro/>
  </Container>
  <Cards/>
  <Newsletter/>
  <Footer/>
  </>
  )
};

export default Home;
