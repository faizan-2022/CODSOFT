import React from 'react';
import styled, { keyframes } from 'styled-components';

const Body = styled.div`
  margin: 0;
  padding: 0;
  background: #262626;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 10rem;
  animation: ${Rotate} 2s linear infinite;
`;

const LoadingScreen = () => {
  return (
    <Body>
      <Container>
        <Logo src="images/MF.webp" alt="Loading" />
      </Container>
    </Body>
  );
};

export default LoadingScreen;
