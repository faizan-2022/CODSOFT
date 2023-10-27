import React from 'react'
import { styled } from 'styled-components';
import Navbar from '../components/Navbar';
import { lMobile, mMobile, sMobile, tablet } from '../responsive';

const UpperContainer = styled.div`
  width: 100%;
  height: 65vh;
  background: linear-gradient(rgba(55, 61, 32, 0.4), rgba(55, 61, 32, 0.4)),
    url("/images/9.jpg") no-repeat center center/cover;
    ${'' /* margin-bottom: 20px; */}
    ${tablet({height: "55vh"})}
    ${lMobile({height: "50vh"})}
    ${mMobile({height: "45vh"})}
    ${sMobile({height: "40vh"})}
`;

const LowerContainer = styled.div`
    width: 100%;
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${'' /* padding: 0px 40px; */}
    ${'' /* background-color: gray; */}
    ${tablet({height: "40vh"})}
    ${lMobile({height: "45vh"})}
    ${mMobile({height: "50vh"})}
    ${sMobile({height: "55vh"})}
`;

const Para = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 41vw;
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 1rem;
    ${lMobile({width: "50vh"})}
    ${sMobile({width: "45vh"})}
`;

const Line = styled.div`
    background-color: #373d20;
    width: 41vw;
    height: 1.5rem;
    ${lMobile({width: "50vh"})}
    ${sMobile({width: "45vh"})}
`;

const About = () => {
  return (
    <>
    <UpperContainer>
      <Navbar/>
    </UpperContainer>

    <LowerContainer>
    <Para>Welcome to the University Cafe Web App, your one-stop solution for convenient dining at University of Gujrat. We understand the challenges faced by students when it comes to finding a quick and comfortable dining experience on campus. That's why we developed this web app to revolutionize the way you enjoy your meals. </Para>
    <Line/>
    </LowerContainer>
    </>
  )
}

export default About
