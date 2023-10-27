import React from 'react';
import styled from "styled-components";
import { lMobile, mMobile, sMobile, tablet } from '../responsive';

const Container = styled.div`
    height: 80vh;
    ${'' /* width: 100%; */}
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    ${'' /* // background-color: black; */}
    ${tablet({height: "70vh"})}
    ${lMobile({height: "60vh"})}
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 8rem;
    margin-bottom: 1rem;
`;

const Content = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 30rem;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    text-align: center;
    ${tablet({padding: "0rem 15rem"})};
    ${lMobile({padding: "0rem 5rem"})};
    ${mMobile({padding: "0rem 3rem"})};
    ${sMobile({padding: "0rem 1rem"})};
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14rem;
    padding: 1.5rem 0rem;
    border-radius: 2.5rem;
    font-weight: bold;
    font-size: 1.9rem;
    border: .2rem solid #717744;
    background: transparent;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #717744;
        transition: all 0.3s linear;
        color: rgb(240, 240, 240);
    }
`;

const Intro = () => {
  return (
    <Container>
        <Wrapper>
      <Title>Welcome</Title>
      <Content>Tired of waiting in long queues under the scorching sun? We understand. That's why we've developed a convenient web app to revolutionize your dining experience in the heart of Pakistan.</Content>
      <Button>Let's Start</Button>
        </Wrapper>
    </Container>
  )
}

export default Intro