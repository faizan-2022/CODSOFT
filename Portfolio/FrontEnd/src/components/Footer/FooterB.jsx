import React from 'react';
import styled from 'styled-components';
import { glaxayFold, lMobile, sMobile, tablet } from '../../responsiveness/responsive';

const Container = styled.div`
  width: 100%;
  height: 6vh;
  background-color: #01be96;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Content = styled.p`
  padding: 0rem 5rem;
  ${tablet({fontSize:".8rem", padding:"0rem"})}
  ${lMobile({fontSize:".6rem", padding:"0rem"})}
  ${sMobile({fontSize: ".5rem", padding:"0rem"})}
  ${glaxayFold({fontSize: ".4rem", padding:"0rem"})}
`;

const Bold = styled.b`
  margin-left: .1rem;
  margin-right: .1rem;
`;

const FooterB = () => {
  return (
    <Container>
      <Content>Copyright  &copy;  2023 <Bold>codingwithfaizan.com</Bold>  |  Designed by <Bold>Muhammad Faizan</Bold></Content>
    </Container>
  )
}

export default FooterB
