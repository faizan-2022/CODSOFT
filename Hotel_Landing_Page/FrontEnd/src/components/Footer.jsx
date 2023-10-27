import React from 'react'
import styled from 'styled-components'
import { glaxayFold, sMobile } from '../responsive';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background-color: #717744;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.p`
  padding: 0rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  ${sMobile({fontSize: "1.5rem"})}
  ${glaxayFold({fontSize: "1.3rem"})}
`;

const Bold = styled.b`
  margin-left: .4rem;
  margin-right: .4rem;
`;

const Footer = () => {
  return (
    <Container>
      <Content>Copyright  &copy;  2023 <Bold>stregishotels.com</Bold>  |  Designed by <Bold>Muhammad Faizan</Bold></Content>
    </Container>
  )
}

export default Footer
