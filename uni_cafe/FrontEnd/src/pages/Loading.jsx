import React from "react";
import { keyframes, styled } from "styled-components";

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  background: #262626;
`;

const AnimateC = keyframes`
    0%
  {
    transform:rotate(0deg);
  }
  100%
  {
    transform:rotate(360deg);
  }
`;

const Animate = keyframes`
    0%
  {
    transform:rotate(45deg);
  }
  100%
  {
    transform:rotate(405deg);
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  color: white;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid #717744;
    border-right: 3px solid #717744;
    border-radius: 50%;
    animation: ${AnimateC} 2s linear infinite;
  }
`;

const Main = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: ${Animate} 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #717744;
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px #717744;
  }
`;

const Loading = () => {
  return <Body>
        <Container>
          Loading
          <Main></Main>
        </Container>
      </Body>
};

export default Loading;
